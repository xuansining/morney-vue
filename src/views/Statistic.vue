<template>
    <div>
        <Layout>
            <Tabs :value.sync="currentValue" class="st-type" prefix="statistic" :data-source="typeTabList"></Tabs>
            <Tabs class="interval-type" :data-source="intervalTabList" :value.sync="currentTab"
                  prefix="interval"></Tabs>
            <ul>
               <li  v-for="(group,index) in result" :key="index">
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

    get result() {
      const {recordList} = this;
      type hashTableValue = { title: string; items: RecordItem[]}
      type HashTable = {
        [key: string]:
          hashTableValue;
      }
      const hashTable: HashTable = {};
      for (let i = 0; i < recordList.length; i++) {

        const [date, time] = recordList[i].createAt!.split('T');
        hashTable[date]=hashTable[date] ||{title:date,items:[]};
        hashTable[date].items.push(recordList[i])

      }
      return hashTable;
    }
    beautify(string: string){
      const d=dayjs(string);
      const now=dayjs();

      if(d.isSame(now,'day')){
        return '今天'
      }else if(d.isSame(now.subtract(1,'day'),'day')){
        return '昨天'
      }
      else if(d.isSame(now.subtract(2,'day'),'day')){
        return '前天';
      }
      else if(d.isSame(now,'year')){
         return dayjs(d).format('M月D日')
      }else{
        return dayjs(d).format('YY年M月D日')
      }

    }

    setTag(tags: Tag[]): string{

      return tags===[] ? tags.join(','):'无'
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
    %item{
        line-height: 40px;
        padding: 0 16px;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .item{
        @extend %item;
        background-color: #fff;
        .note{
            margin-right: auto;
            padding: 0 10px;
            color: #999999;
        }
    }
    .title{
        @extend %item;
    }


</style>