<template>
    <div class="tags">
        <ul class="current">


            <li @click="toggle(tag)" :class="{selected:selectedTags.indexOf(tag)>=0}" v-for="tag in tagList"
                v-bind:key="tag.id">
                {{tag.name}}
            </li>


        </ul>
        <div class="new">
            <button @click="creatTag">新增标签</button>
        </div>
    </div>
</template>
<script lang="ts">
  import {Component, Watch} from 'vue-property-decorator';
  import store from '@/store';
  import {mixins} from 'vue-class-component';
  import {TagHelper} from '@/mixins/TagHelper';


  @Component
  export default class Tags extends mixins(TagHelper) {
    selectedTags: Tag[] | undefined = [];
    beforeCreate(){
      this.$store.commit('fetchTags');


    }
    toggle(tag: Tag) {
      if (this.selectedTags) {
        const index = this.selectedTags.indexOf(tag);
        if (index >= 0) {
          this.selectedTags.splice(index, 1);
        } else {

          this.selectedTags?.push(tag);

        }
      }


    }
    get tagList(){
      if(store.state.tagList.length===0){
         const defaultTags=['衣','食','住','行'];
         defaultTags.forEach((tag)=>{
           this.$store.commit('createTag',tag)
         })


      }
      return store.state.tagList;

    }




    @Watch('selectedTags')
    onSelectedTagsChanged(value: string) {
      this.$emit('update:value', value);
    }

  }
</script>


<style scoped lang="scss">
    @import "~@/assets/style/helper.scss";


    .tags {
        flex-grow: 1;
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
        background: #ffffff;
        .current {
            display: flex;
            padding: 16px;
            flex-wrap: wrap;


            > li {
                font-size: 14px;
                $bg: #cccccc;
                background-color: $bg;
                padding: 0 16px;
                margin-right: 16px;
                $height: 24px;
                line-height: $height;
                height: $height;
                border-radius: $height/2;
                margin-top: 5px;

                &.selected {
                    background: darken($bg, 40%);
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