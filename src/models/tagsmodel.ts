type TagModel = {
  data: string[];
  fetch: () => void;
  save: () => void;
  clone: (stringArray: string[]) => string[];
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
    if (this.data.indexOf(name) >= 0) {
      return 'duplicated';
    }
    this.data.push(name);
    this.save();
    return 'success';
  }

};
export default tagModel;
