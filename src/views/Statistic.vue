<template>
    <div>
        <Layout>
            <Tabs :value.sync="currentValue" class="st-type" prefix="statistic" :data-source="typeTabList"></Tabs>
            <Tabs class="interval-type" :data-source="intervalTabList" :value.sync="currentTab" prefix="interval"></Tabs>
        </Layout>
    </div>
</template>

<script lang="ts">
  import Vue from 'vue';
  import {Component} from 'vue-property-decorator';

  import Tabs from '@/components/Tabs.vue';
  import intervalTabList from '@/constants/intervalTabList';
  import typeTabList from '@/constants/typeTabList';

  @Component({
    components: {

      Tabs: Tabs

    }
  })
  export default class Statistic extends Vue {
    currentValue = '-';
    currentTab = 'day';
    intervalTabList =intervalTabList;
    typeTabList = typeTabList;
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
    .interval-type ::v-deep{
        .interval-tab-item{
            height: 44px;
            line-height: 44px;
        }
    }


</style>