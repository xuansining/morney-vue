<template>
    <div>
        <Layout :class-prefix="'layout'">

            <Tags @update:value="onUpdateTags"></Tags>
            <div class="notes-wrapper">

                <EditForm @update:value="onUpdateNotes" placeholder="请输入备注" note-name="备注"
                          :value="record.notes"></EditForm>
            </div>
            <Tabs :value.sync="record.type" :data-source="dataSource"></Tabs>
            <NumberPad :value.sync="record.amount" @submit="onSubmit"></NumberPad>

        </Layout>
    </div>
</template>

<script lang="ts">
  import Numberpad from '@/components/money/Numberpad.vue';
  import Tags from '@/components/money/Tags.vue';

  import EditForm from '@/components/money/EditForm.vue';
  import Vue from 'vue';
  import {Component} from 'vue-property-decorator';

  window.localStorage.setItem('version', '0.0.1');


  import Button from '@/components/Button.vue';
  import Tabs from '@/components/Tabs.vue';
  import typeTabList from '@/constants/typeTabList';


  @Component({
    components: {
      Button,

      NumberPad: Numberpad,
      Tags: Tags,
      Tabs: Tabs,
      EditForm: EditForm,


    },

  })

  export default class Money extends Vue {


    record: RecordItem = {tags: [], notes: '', type: '-', amount: '0'};
    dataSource = typeTabList;

    onUpdateTags(value: string[]) {
      this.record.tags = value;
    }

    onUpdateNotes(value: string) {
      this.record.notes = value;
    }

    onSubmit() {
      console.log('提交');
      if (this.record.tags.length === 0) return window.alert('请至少选择一个标签');
      if (this.record.amount === '' || this.record.amount === '0') return window.alert('金额不能为空');
      this.$store.commit('createRecord', this.record);
      this.record.notes = '';
      window.alert('保存成功');
    }


  }
</script>
<style lang="scss">
    .layout-content {
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
    }

    .notes-wrapper {
        background: #E5E5E5;
        padding: 12px 0;
    }

</style>

