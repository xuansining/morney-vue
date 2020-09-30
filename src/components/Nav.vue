<template>
    <nav>
        <router-link to="/money" class="item" active-class="selected">

            <Icon v-bind:name="'money'" class="icon" ></Icon>
           记账
        </router-link>
        <router-link to="/label" class="item" active-class="selected">
            <Icon v-bind:name="'label'"  class="icon"></Icon>
               标签
            </router-link>
        <router-link to="/statistic" class="item" active-class="selected">
            <Icon v-bind:name="'chart'" class="icon"></Icon>
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
      flex-direction: row;
      box-shadow: 0 0 3px rgba(0,0,0,0.25);
      font-size: 12px;
      >.item{
          display: flex;
          justify-content: center;
          align-items: center;
          flex-direction: column;
          width: 33.33%;

          padding: 5px 0;

          .icon{
              width: 32px;
              height: 32px;
          }

      }
      >.item.selected{
          color:red;
      }
  }
</style>