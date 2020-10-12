<template>
    <button class="createTags" @click="$emit('click',$event)">
        <slot></slot>

    </button>
</template>

<script lang="ts">
  import Vue from 'vue';
  import {Component} from 'vue-property-decorator';

  @Component

  export default class Button extends Vue {

  }
</script>

<style scoped lang="scss">
    .createTags {
        border: none;
        height: 40px;
        color: white;
        padding: 0 16px;
        font-size: 17px;
        border-radius: 4px;
        background: #767676;

        &-wrapper {
            padding: 16px 0;
            text-align: center;
            margin-top: 44-16px;
        }
    }

</style>