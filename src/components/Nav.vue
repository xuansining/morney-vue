<template>
    <nav>
        <router-link to="/money" class="item">

            <Icon v-bind:name="'money'" class="icon"></Icon>
           记账
        </router-link>
        <router-link to="/label" class="item">
            <Icon v-bind:name="'label'"  class="icon"></Icon>
               标签
            </router-link>
        <router-link to="/statistic" class="item">
            <Icon v-bind:name="'statistics'" class="icon"></Icon>
               统计
            </router-link>
    </nav>
</template>

<script lang="ts">

  import Icon from '@/components/Icon.vue';

  export default {

    name: 'Nav',
    components:{
      Icon:Icon
    }
  };
</script>

<style scoped lang="scss">
  nav{
      display: flex;
      justify-content: space-between;
      box-shadow: 0 0 3px rgba(0,0,0,0.25);
      >.item{
          display: flex;
          justify-content: center;
          align-items: center;
          flex-direction: column;
          width: 33.33%;
          font-size: 12px;
          padding: 5px 0;

          .icon{
              width: 32px;
              height: 32px;
          }

      }
  }
</style>