<template>
    <div>
        <Layout :class-prefix="'layout'">
            <Tags :data-source.sync="dataSource" @update:value="onUpdateTags"></Tags>
            <Notes @update:value="onUpdateNotes"></Notes>
            <Types :value.sync="record.type"></Types>
            <NumberPad :value.sync="record.amount" @submit="onSubmit"></NumberPad>
            {{recordList}}
        </Layout>
    </div>
</template>

<script lang="ts">
  import Numberpad from '@/components/money/Numberpad.vue';
  import Tags from '@/components/money/Tags.vue';
  import Types from '@/components/money/Types.vue';
  import Notes from '@/components/money/Notes.vue';
  import Vue from 'vue';
  import {Component} from 'vue-property-decorator';

  window.localStorage.setItem('version','0.0.1');

  import model from '@/model'


  @Component({
    components: {

      NumberPad: Numberpad,
      Tags: Tags,
      Types: Types,
      Notes: Notes,


    }
  })

  export default class Money extends Vue {

    dataSource = ['衣', '食', '住', '行', '嫖', '赌'];
    record: RecordItem = {tags: [], notes: '', type: '-', amount: '10'};
    recordList=model.fetch();

    onUpdateTags(value: string[]) {
      this.record.tags = value;
    }

    onUpdateNotes(value: string) {
      this.record.notes = value;
    }

    onSubmit() {
      console.log('提交');
      const deepClone: RecordItem= model.clone(this.record);
      deepClone.createAt=new Date();
      this.recordList.push(deepClone);
      model.save(this.recordList)

    }


  }
</script>
<style lang="scss">
    .layout-content {

        display: flex;
        flex-direction: column;
        justify-content: flex-end;
    }
</style>

