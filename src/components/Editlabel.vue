<template>
    <Layout>
        <div class="titleBar">
            <Icon name="left"></Icon>
            <span>编辑标签</span>
        </div>
        <EditForm note-name="标签名" placeholder="请输入标签名"></EditForm>
        <Button>删除标签</Button>

    </Layout>
</template>

<script lang="ts">
  import Vue from 'vue';
  import {Component} from 'vue-property-decorator';
  import tagModel from '@/models/tagsmodel';
  import EditForm from '@/components/money/EditForm.vue';
  import Button from '@/components/Button.vue';


  const tagList = tagModel.fetch();
  @Component({
    components: {
      EditForm: EditForm,
      Button:Button
    }
  })

  export default class Editlabel extends Vue {

    created() {

      const id = this.$route.params.id;
      const tag = tagList.filter(tag => tag.id === id)[0];
      if (tag) {
        console.log(tag);
      } else {
        this.$router.replace('/404');
      }

    }
  }
</script>

<style scoped lang="scss">

</style>