import recordItemListStore from '@/store/recordItemListStore';
import tagListStore from '@/store/tagListStore';

const oldStore = {
  ...recordItemListStore,
  ...tagListStore
};
console.log(oldStore);
export default oldStore;