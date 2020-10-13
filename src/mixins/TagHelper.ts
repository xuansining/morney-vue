import Component from 'vue-class-component';
import Vue from 'vue'
@Component
export class TagHelper extends Vue{
   creatTag(){
     const createdTag = window.prompt('请输入标签');
     if (createdTag) {
       this.$store.commit('createTag',createdTag);

     } else {
       window.alert('标签不能为空');
     }
   }
}