import Vue from 'vue';
import Vuex from 'vuex';
import createId from '@/lib/idCreator';
import cloneObj from '@/lib/clone';
import router from '@/router';

Vue.use(Vuex);
const localStorageKey = 'tags';
type rootState = {
  recordList: RecordItem[];
  tagList: Tag[];
  currentTag: Tag | undefined;
}
const store = new Vuex.Store({
  state: {
    recordList: [],
    tagList: [],
    currentTag: undefined
  } as rootState,
  mutations: {

    fetchTags(state) {
      state.tagList = JSON.parse(window.localStorage.getItem(localStorageKey) || '');
    },
    createTag(state, name) {
      const names = state.tagList.map(tag => tag.name);

      if (names.indexOf(name) >= 0) {
        alert('标签名重复');
      }
      const _id: number = createId();
      state.tagList.push({id: _id.toString(), name: name});
      store.commit('saveTags');
      alert('标签创建成功');
      console.log('tagList');
      console.log(state.tagList);

    },
    updateTag(state, obj: {id: string;name: string}) {
      const {id,name}=obj;
      const nameList = state.tagList.map(tag => tag.name);
      const tag = state.tagList.filter(tag => tag.id === id)[0];
      if (tag) {
        if (nameList.indexOf(name) >= 0) {
          return 'duplicated';
        } else {
          tag.name = name;
          store.commit('saveTags');
          return 'success';
        }
      } else {
        return 'not found';
      }

    },
    setCurrentTag(state, id) {
      state.currentTag = state.tagList.filter(tag => tag.id === id)[0];
    },
    removeTag(state, id) {
      let index = -1;
      for (let i = 0; i < state.tagList.length; i++) {
        if (state.tagList[i].id === id) {
          index = i;
        }
      }
      if (index >= 0) {
        state.tagList.splice(index, 1);
        store.commit('saveTags');
        router.back()
      } else {
        alert('删除失败');
      }

    },

    saveTags(state) {
      const _tagList = cloneObj(state.tagList);
      window.localStorage.setItem(localStorageKey, JSON.stringify(_tagList));
    }
    ,
    fetchRecord(state) {
      state.recordList = JSON.parse(window.localStorage.getItem('recordList') || '[]') as RecordItem[];
    },
    createRecord(state, record) {
      const _record = cloneObj(record);

      _record.createAt = new Date().toISOString();

      state.recordList.push(_record);
      store.commit('saveRecord');
    },
    saveRecord(state) {
      const _data = cloneObj(state.recordList);
      window.localStorage.setItem('recordList', JSON.stringify(_data));
    }

  }
});
export default store;

