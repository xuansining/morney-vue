<template>
    <label class="notes">

        <span class="tip">{{noteName}}</span>
        <input type="text" :placeholder="this.placeholder" v-model="value"/>
    </label>
</template>

<script lang="ts">
    import Vue from 'vue'
    import {Component, Prop, Watch} from 'vue-property-decorator';

    @Component
  export default class EditForm extends Vue{
      value='';
      @Prop() noteName!: string;
      @Prop() placeholder?: string;
      @Watch('value')
      onValueChanged(value: string){
        this.$emit('update:value',value)
      }
  }
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