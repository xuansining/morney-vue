<template>
    <div>
        <Layout>
            <Tabs :value.sync="currentValue" class="st-type" prefix="statistic" :data-source="typeTabList"></Tabs>
            <Tabs class="interval-type" :data-source="intervalTabList" :value.sync="currentTab"
                  prefix="interval"></Tabs>
            <ul>
                <li v-for="(group,index) in result" :key="index">

                    <h3 class="title">{{beautify(group.title)}}</h3>
                    <ol>
                        <li class="item" v-for="item in group.items" :key="item.id">
                            <span>{{setTag(item.tags)}}</span>
                            <span class="note">{{item.notes}}</span>
                            <span>￥{{item.amount}}</span>
                        </li>
                    </ol>
                </li>
            </ul>
        </Layout>
    </div>
</template>

<script lang="ts">
  import Vue from 'vue';
  import {Component} from 'vue-property-decorator';
  import dayjs from 'dayjs';
  import Tabs from '@/components/Tabs.vue';
  import intervalTabList from '@/constants/intervalTabList';
  import typeTabList from '@/constants/typeTabList';
  import store from '@/store';
  import cloneObj from '@/lib/clone';


  @Component({
    components: {
      Tabs: Tabs
    }
  })

  export default class Statistic extends Vue {

    currentValue = '-';
    currentTab = 'day';
    intervalTabList = intervalTabList;
    typeTabList = typeTabList;


    beforeCreate() {
      this.$store.commit('fetchRecord');

    }

    get recordList() {
      return store.state.recordList;
    }

    // [
    //    { title: string , items: RecordItem[] }
    //    { title: string , items: RecordItem[] }
    //    { title: string , items: RecordItem[] }
    //    ....
    // ]
    //
    get result() {
      const {recordList} = this;
      type hashTableValue = { title: string | undefined; items: RecordItem[] }[]
      const hashTable: hashTableValue = [];
      const _recordList = cloneObj(recordList);
      const newGroupList=_recordList.sort(function (a,b) {
         return dayjs(b.createAt).valueOf()-dayjs(a.createAt).valueOf()

      });

      hashTable.push({title:dayjs(newGroupList[0].createAt).format('YYYY-MM-DD'),items:[]});
      for(let i=0;i<newGroupList.length;i++){
        const last=hashTable[hashTable.length-1];
        const current=newGroupList[i];
        if(dayjs(last.title).isSame( dayjs(current.createAt) ,'day')){
          //和第一个的时间是相同的
          last.items.push(current)
        }else {
           hashTable.push( {title:dayjs(current.createAt).format('YYYY-MM-DD'),items:[current]})
        }

      }

      console.log(hashTable);
      return hashTable;
    }

    beautify(string: string) {
      const d = dayjs(string);
      const now = dayjs();

      if (d.isSame(now, 'day')) {
        return '今天';
      } else if (d.isSame(now.subtract(1, 'day'), 'day')) {
        return '昨天';
      } else if (d.isSame(now.subtract(2, 'day'), 'day')) {
        return '前天';
      } else if (d.isSame(now, 'year')) {
        return dayjs(d).format('M月D日');
      } else {
        return dayjs(d).format('YY年M月D日');
      }

    }

    setTag(tags: Tag[]): string {

      return tags === [] ? tags.join(',') : '无';
    }

  }
</script>

<style scoped lang="scss">
    .st-type ::v-deep {

        .statistic-tab-item {
            background-color: #fff;

            &.selected {
                background-color: #C4C4C4;

            }

            &.selected::after {
                display: none;

            }
        }
    }

    .interval-type ::v-deep {
        .interval-tab-item {
            height: 44px;
            line-height: 44px;

        }
    }

    %item {
        line-height: 40px;
        padding: 0 16px;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .item {
        @extend %item;
        background-color: #fff;

        .note {
            margin-right: auto;
            padding: 0 10px;
            color: #999999;
        }
    }

    .title {
        @extend %item;
    }


</style>