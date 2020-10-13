<template>
    <Layout>
        <div class="titleBar">
            <Icon name="left" class="left" @click="goBack"></Icon>
            <span class="title">编辑标签</span>
            <div class="right"></div>
        </div>
        <div class="editform-wrapper">

            <EditForm note-name="标签名" placeholder="请输入标签名" :value="tag.name" @update:value="updateTagName"></EditForm>
        </div>
        <div class="button-wrapper">

            <Button @click="remove(tag.id)">删除标签</Button>
        </div>

    </Layout>
</template>

<script lang="ts">
  import Vue from 'vue';
  import {Component} from 'vue-property-decorator';

  import EditForm from '@/components/money/EditForm.vue';
  import Button from '@/components/Button.vue';
  import store from '@/store';




  @Component({
    components: {
      EditForm: EditForm,
      Button: Button

    }
  })

  export default class Editlabel extends Vue {
    tag: { id: string; name: string } = {id: '0', name: 'admin'};

    created() {
      //TODO

      this.$store.commit('setCurrentTag',this.$route.params.id);
      if (this.currentTag) {
        this.tag = this.currentTag;
      } else {
        this.$router.replace('/404');
      }

    }
    get currentTag(){
      return store.state.currentTag;
    }
    goBack() {
      this.$router.back();
    }

    updateTagName(name: string) {
      this.$store.commit('updateTag',name)

    }

    remove(id: string) {
      // if (oldStore.removeTag(id)) {
      //   this.$router.back();
      // } else {
      //   alert('删除失败');
      // }
 //TODO

    }
  }
</script>

<style scoped lang="scss">
    .titleBar {
        text-align: center;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 15px 23px;
        background-color: #fff;

        .title {
            font-size: 16px;
        }

        .left {

        }

        .right {
            width: 9px;
            height: 2px;
        }

    }

    .editform-wrapper {
        margin-top: 5px;
        background: #ffffff;
    }

    .button-wrapper {
        padding: 16px 0;
        text-align: center;
    }


</style>