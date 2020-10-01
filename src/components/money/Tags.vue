<template>
    <div class="tags">
        <ul class="current">

            <li>衣</li>
            <li>食</li>
            <li>住</li>
            <li>行3333333</li> <li>衣</li>
            <li>食</li>
            <li>住</li>
            <li>行</li> <li>衣</li>
            <li>食</li>
            <li>住</li>
            <li>行</li>
            <li>行</li> <li>衣</li>
            <li>食</li>
            <li>住</li>
            <li>行</li><li>行</li> <li>衣</li>
            <li>食</li>
            <li>住</li>




        </ul>
        <div class="new">
            <button>新增标签</button>
        </div>
    </div>
</template>

<script lang="ts">
  export default {
    name: 'Tags'
  };
</script>

<style scoped lang="scss">
    @import "~@/assets/style/helper.scss";


    .tags {
        .current {
            display: flex;
            padding: 16px;
            flex-wrap: wrap;


            > li {
                font-size: 14px;
                background-color: #cccccc;
                padding: 0 16px;
                margin-right: 16px;
                $height: 24px;
                line-height: $height;
                height: $height;
                border-radius: $height/2;
                margin-top:5px;
            }
        }

        .new {

            padding-left: 20px;
            padding-bottom: 12px;

            button {
                padding: 0 4px;
                background-color: transparent;
                border: none;
                border-bottom: 1px solid;
                font-size: 14px;
                color: #999999;
            }

        }
    }


</style>