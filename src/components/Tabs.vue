<template>
    <div class="type">
        <ul>
            <li v-for="tab in dataSource" :key="tab.name" :class="{selected:value===tab.name,[prefix+'-tab-item']:prefix}" @click="selectTab(tab.name)">
                {{tab.text}}
            </li>
        </ul>
    </div>
</template>

<script lang="ts">
  import Vue from 'vue';
  import {Component, Prop} from 'vue-property-decorator';
  type TabName={
    text: string;
     name: string;
  }
  @Component

  export default class Tabs extends Vue {
    @Prop({required:true})dataSource!: TabName[];
    @Prop(String) value?: string;
    @Prop(String) prefix?: string;
    selectTab(tabName: string){
      this.$emit('update:value',tabName)
    }
  }
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
            flex-grow: 1;
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