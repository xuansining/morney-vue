import createId from '@/lib/idCreator';

type Tag = {
  id: string;
  name: string;
}
type TagModel = {

  data: Tag[];
  fetch: () => Tag[];
  save: () => void;
  clone: (stringArray: Tag[]) => Tag[];
  create: (name: string) => 'success' | 'duplicated';
  update: (id: string, name: string) => 'success' | 'duplicated' | 'not found';
  remove: (id: string) => boolean;
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
    const names = this.data.map(tag => tag.name);

    if (names.indexOf(name) >= 0) {
      return 'duplicated';
    }
    const _id: number = createId();
    this.data.push({id: _id.toString(), name: name});
    this.save();
    return 'success';


  },
  update(id, name) {
    const nameList = this.data.map(tag => tag.name);
    const tag = this.data.filter(tag => tag.id === id)[0];
    if (tag) {
      if (nameList.indexOf(name) >= 0) {
        return 'duplicated';
      } else {
        tag.name = name;
        this.save();
        return 'success';
      }
    } else {
      return 'not found';
    }
  },
  remove(id) {
    let index = -1;
    for (let i = 0; i < this.data.length; i++) {
      if (this.data[i].id === id) {
        index = i;
      }
    }
    if (index >= 0) {
      this.data.splice(index, 1);
      this.save();
      return true;
    }else{
      return  false;
    }
  }

};
export default tagModel;
