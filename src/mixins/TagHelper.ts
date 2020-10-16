import Component from 'vue-class-component';
import Vue from 'vue';
import store from '@/store';

@Component
export class TagHelper extends Vue {
  creatTag() {
    const createdTag = window.prompt('请输入标签');
    if (createdTag) {
      this.$store.commit('createTag', createdTag);
      if (this.CreateError === null) {
        alert('标签创建成功');
      }

    } else {
      window.alert('标签不能为空');
    }
  }

  get CreateError() {
    return store.state.createError;
  }
}