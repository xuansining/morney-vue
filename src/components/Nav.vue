<template>
    <div class="nav">
        <router-link to="/money">
            <svg>
                <use xlink:href="#money"></use>
            </svg>
        </router-link>
        <router-link to="/label">标签</router-link>
        <router-link to="/statistic">统计</router-link>
    </div>
</template>

<script lang="ts">

  import x from '@/assets/icons/statistics.svg'
  import y from '@/assets/icons/money.svg'

  console.log(x);
  console.log(y);

  export default {

    name: 'Nav'
  };
</script>

<style scoped lang="scss">
  .nav{
      border: 1px solid #000000;
  }
</style>