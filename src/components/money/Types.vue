<template>
    <div class="type">
        <ul>
            <li class="selected">支出</li>
            <li>收入</li>
        </ul>
    </div>
</template>

<script lang="ts">
  export default {
    name: 'Types'
  };
</script>

<style scoped lang="scss">
    .type > ul {
        background-color: #C4C4C4;
        display: flex;


        li {
            position: relative;
            font-size: 24px;
            text-align: center;
            height: 64px;
            width: 50%;
            line-height: 64px;


            &.selected::after {

                content: '';
                position: absolute;
                display: block;
                height: 4px;
                bottom: 0;
                left: 0;
                background-color: #333333;
                width: 100%;


            }


        }
    }

</style>