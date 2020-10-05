<template>
    <div class="tags">
        <ul class="current" >


            <li @click="toggle(tag)" :class="{selected:selectedTags.indexOf(tag)>=0}" v-for="tag in dataSource" v-bind:key="tag">
                {{tag}}
            </li>



        </ul>
        <div class="new">
            <button @click="create">新增标签</button>
        </div>
    </div>
</template>

<script lang="ts">
    import Vue from 'vue'
    import {Component,Prop} from 'vue-property-decorator';

    @Component
  export  default  class Tags extends Vue{
    @Prop(Array) readonly dataSource: string[] | undefined;
    selectedTags: string[] | undefined =[];
    toggle(tag: string){
      if (this.selectedTags){
           const index=this.selectedTags.indexOf(tag);
        if(index>=0){
            this.selectedTags.splice(index,1)
        }else{

          this.selectedTags?.push(tag);

        }
      }


    }
    create(){
      const createdTag=window.prompt('请输入标签');
      if(createdTag){
        this.$emit('update:dataSource',[...this.dataSource!,createdTag])

      }else{
        window.alert('标签不能为空');
      }
    }


  }
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
                $bg:#cccccc;
                background-color:$bg;
                padding: 0 16px;
                margin-right: 16px;
                $height: 24px;
                line-height: $height;
                height: $height;
                border-radius: $height/2;
                margin-top:5px;
                &.selected{
                    background:darken($bg,40%);
                   color: white;
                }

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