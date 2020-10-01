<template>
    <label class="notes">
        <span class="tip">备注</span>
        <input type="text" placeholder="在这里添加备注"/>
    </label>
</template>

<script lang="ts">
  export default {
    name: 'Notes'
  };
</script>

<style scoped lang="scss">
    .notes {

        display: flex;
        background-color: #E5E5E5;
        height: 70px;
        padding: 0 16px;
        align-items: center;
        font-size: 14px;

        .tip {
            padding-right: 16px;

        }

        input {
            border: none;
            flex-grow: 1;
            padding-right: 16px;
            background-color: #E5E5E5;
        }


    }
</style>