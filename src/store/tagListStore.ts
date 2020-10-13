
import tagModel from '@/models/tagsmodel';

export default {


  tagList:tagModel.fetch(),
  createTag(name: string) {

    const message = tagModel.create(name);
    if (message === 'duplicated') {
      alert('标签名重复了');
    } else if (message === 'success') {
      alert('标签创建成功');
    }


  },
  updateTag(id: string, name: string) {
    return tagModel.update(id, name);
  },
  removeTag(id: string) {
    return tagModel.remove(id);
  },
  findTag(id: string) {
    return this.tagList.filter(tag => tag.id === id)[0];
  },
};
