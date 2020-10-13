import recordItemListStore from '@/store/recordItemListStore';
import tagListStore from '@/store/tagListStore';

const store = {
  ...recordItemListStore,
  ...tagListStore
};
console.log(store);
export default store;