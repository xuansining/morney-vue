<template>
    <label class="notes">

        <span class="tip">{{noteName}}</span>
        <input type="text" :placeholder="this.placeholder" @input="$emit('update:value',$event.target.value)" :value="value"/>
    </label>
</template>

<script lang="ts">
    import Vue from 'vue'
    import {Component, Prop, Watch} from 'vue-property-decorator';

    @Component
  export default class EditForm extends Vue{

      @Prop() noteName!: string;
      @Prop() placeholder?: string;
      @Prop({
        default:''
      }) value!: string;
      @Watch('value')
      onValueChanged(value: string){
        this.$emit('update:value',value)
      }
  }
</script>

<style scoped lang="scss">
    .notes {

        display: flex;
        height: 44px;
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
            background:none;
        }


    }
</style>