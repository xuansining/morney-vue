type Tag={
  id: string;
  name: string;
}
type TagModel = {

  data: Tag[];
  fetch: () => Tag[];
  save: () => void;
  clone: (stringArray: Tag[]) => Tag[];
  create: (name: string) => 'success' | 'duplicated';
}
const localStorageKey = 'tags';
const tagModel: TagModel = {
  data: [],
  fetch() {
    const tags = window.localStorage.getItem(localStorageKey);
    if (tags) {
      this.data = JSON.parse(tags);
    }
    return this.data;

  },
  save() {
    const _data = this.clone(this.data);
    window.localStorage.setItem(localStorageKey, JSON.stringify(_data));
  }
  ,
  clone(string) {
    return JSON.parse(JSON.stringify(string));
  },
  create(name) {
    const names=this.data.map(tag=>tag.id);

      if (names.indexOf(name) >= 0) {
        return 'duplicated';
      }
      this.data.push({id:name,name:name});
      this.save();
      return 'success';


  }

};
export default tagModel;
