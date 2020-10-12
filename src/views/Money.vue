<template>
    <div>
        <Layout :class-prefix="'layout'">
            <Tags :data-source="dataSource" @update:value="onUpdateTags"></Tags>
            <div class="notes-wrapper">

                <EditForm @update:value="onUpdateNotes" placeholder="请输入备注" note-name="备注" ></EditForm>
            </div>
            <Types :value.sync="record.type"></Types>
            <NumberPad :value.sync="record.amount" @submit="onSubmit"></NumberPad>
{{record}}
        </Layout>
    </div>
</template>

<script lang="ts">
  import Numberpad from '@/components/money/Numberpad.vue';
  import Tags from '@/components/money/Tags.vue';
  import Types from '@/components/money/Types.vue';
  import EditForm from '@/components/money/EditForm.vue';
  import Vue from 'vue';
  import {Component} from 'vue-property-decorator';

  window.localStorage.setItem('version','0.0.1');

  import recorditemmodel from '@/models/recorditemmodel'
  import tagModel from '@/models/tagsmodel';
  tagModel.fetch();

  @Component({
    components: {

      NumberPad: Numberpad,
      Tags: Tags,
      Types: Types,
      EditForm: EditForm,


    }
  })

  export default class Money extends Vue {

    dataSource = tagModel.data;
    record: RecordItem = {tags: [], notes: '', type: '-', amount: '0'};
    recordList=recorditemmodel.fetch();
    // @Watch('dataSource')
    // onDataSourceChanged(){
    //   tagModel.save()
    // }
    onUpdateTags(value: string[]) {
      this.record.tags = value;
    }

    onUpdateNotes(value: string) {
      this.record.notes = value;
    }

    onSubmit() {
      console.log('提交');
      const deepClone: RecordItem= recorditemmodel.clone(this.record);
      deepClone.createAt=new Date();
      this.recordList.push(deepClone);
      recorditemmodel.save(this.recordList)

    }


  }
</script>
<style lang="scss">
    .layout-content {

        display: flex;
        flex-direction: column;
        justify-content: flex-end;
    }
    .notes-wrapper{
        background: #E5E5E5;
        padding: 12px 0;
    }

</style>

