<template>
    <div class="numberPad">
        <div class="output">{{output}}</div>
        <div class="buttonList">
            <button @click="inputEvent">1</button>
            <button @click="inputEvent">2</button>
            <button @click="inputEvent">3</button>
            <button @click="deleteContent">删除</button>
            <button @click="inputEvent">4</button>
            <button @click="inputEvent">5</button>
            <button @click="inputEvent">6</button>
            <button @click="clearContent">清空</button>
            <button @click="inputEvent">7</button>
            <button @click="inputEvent">8</button>
            <button @click="inputEvent">9</button>
            <button @click="onOk" class="ok">OK</button>
            <button @click="inputEvent" class="zero">0</button>
            <button @click="inputEvent">.</button>


        </div>
    </div>
</template>

<script lang="ts">
  import Vue from 'vue';
  import {Component, Prop} from 'vue-property-decorator';


  @Component
  export default class Numberpad extends Vue {
    @Prop(String) readonly value!: string;
    output = this.value;

    inputEvent(e: MouseEvent) {
      const btn = (e.currentTarget as HTMLButtonElement);
      const inputContent = btn.textContent!;
      if (this.output === '0') {
        if (inputContent === '0') {
          return;
        }
        if ('123456789'.indexOf(inputContent) >= 0) {
          this.output = inputContent;
          return;
        }

      }
      if (this.output.indexOf('.') >= 0 || this.output.length === 0) {
        if (inputContent === '.') return;
      }
      this.output += inputContent;

    }

    deleteContent() {
      if (this.output.length >= 1) {

        this.output = this.output.slice(0, -1);
      }

    }

    clearContent() {
      this.output = '0';
    }

    onOk() {
      this.$emit('update:value', this.output);
      this.$emit('submit');
      this.output = '0';
    }

  }
</script>

<style scoped lang="scss">
    @import "~@/assets/style/helper.scss";

    .numberPad {

        .output {
            @extend %innerShadow;
            @extend %clearFix;
            font-size: 36px;
            padding: 0 16px;
            text-align: right;
            background: #ffffff;
            font-family: Consolas, monospace;
            height: 72px;
            line-height: 72px;

        }

        .buttonList {
            @extend %clearFix;


            button {

                float: left;
                width: 25%;
                height: 64px;
                border: none;
                $bg: #F2F2F2;

                &:nth-child(1) {
                    background: $bg;
                }

                &:nth-child(2), &:nth-child(5) {
                    background: darken($bg, 4%);
                }

                &:nth-child(3), &:nth-child(6), &:nth-child(9) {
                    background: darken($bg, 2*4%);
                }

                &:nth-child(4), &:nth-child(7), &:nth-child(10) {
                    background: darken($bg, 3*4%);
                }

                &:nth-child(8), &:nth-child(11), &:nth-child(13) {
                    background: darken($bg, 4*4%);
                }

                &:nth-child(12), &:nth-child(14) {
                    background: darken($bg, 5*4%);
                }
            }

            .ok {
                float: right;
                height: 128px;
            }

            .zero {
                width: 50%;
            }
        }

    }

</style>