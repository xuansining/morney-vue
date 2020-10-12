import Vue from 'vue';
import App from './App.vue';
import './registerServiceWorker';
import router from './router';
import store from './store';
import Nav from '@/components/Nav.vue';
import Layout from '@/components/Layout.vue';
import Icon from '@/components/Icon.vue';
import tagModel from '@/models/tagsmodel';
import recorditemmodel from '@/models/recorditemmodel';


Vue.config.productionTip = false;

Vue.component('Nav', Nav);
Vue.component('Layout', Layout);
Vue.component('Icon', Icon);
window.tagList=tagModel.fetch();
window.recordList=recorditemmodel.fetch();
window.createTag=(name)=>{

    const message = tagModel.create(name);
    if (message === 'duplicated') {
      alert('标签名重复了');
    } else if (message === 'success') {
      alert('标签创建成功');
    }


};
window.updateTag=(id,name)=>{
  return  tagModel.update(id, name);
};
window.removeTag=(id)=>{
  return  tagModel.remove(id)
};
window.findTag=(id)=>{
  return window.tagList.filter(tag => tag.id === id)[0];
};
new Vue({
  router: router,
  store,
  render: h => h(App)
}).$mount('#app');
