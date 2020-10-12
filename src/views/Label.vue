<template>
    <div>
        <Layout>
            <div class="tags">
                <router-link class="tagItem" :to="`label/editlabel/${tag.id}`" v-for="tag in tags" :key="tag.id"><span>{{tag.name}}</span>
                    <Icon name="right"></Icon>
                </router-link>

            </div>
            <div class="createTags-wrapper">

                <Button class="createTags" @click="createTag">新增标签</Button>
            </div>
        </Layout>
    </div>


</template>

<script lang="ts">
  import Vue from 'vue';
  import {Component} from 'vue-property-decorator';
  import tagModel from '@/models/tagsmodel';
  import Button from '@/components/Button.vue';

  tagModel.fetch();

  @Component({
    components:{
      Button:Button
    }
  })
  export default class Label extends Vue {
    tags= tagModel.data;

    createTag() {
      const name = window.prompt('请输入标签');
      if (name) {

        const message = tagModel.create(name);
        if (message === 'duplicated') {
          alert('标签名重复了');
        } else if (message === 'success') {
          alert('标签创建成功');
        }

      }

    }

  }
</script>

<style scoped lang="scss">
    .tags {
        background-color: #fff;
        font-size: 16px;
        padding-left: 16px;

        > .tagItem {
            display: flex;
            min-height: 44px;
            align-items: center;
            justify-content: space-between;
            border-bottom: 1px solid #e6e6e6;

            svg {
                margin-right: 16px;
            }
        }

    }

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