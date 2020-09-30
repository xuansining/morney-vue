import Vue from 'vue';
import VueRouter, {RouteConfig} from 'vue-router';
import Home from '../views/Home.vue';
import Money from '@/views/Money.vue';
import Label from '@/views/Label.vue';
import Statistic from '@/views/Statistic.vue';
import NoFound from '@/views/NoFound.vue';

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  // {
  //   path: '/',
  //   name: 'Home',
  //   component: Home
  // },
  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
  {
    path:'/',
    redirect:'/Money'
  },
  {
    path:'/Money',
    component:Money

  }
  ,{
    path: '/Label',
    component: Label
  },{
    path:'/Statistic',
    component: Statistic
  }
  ,{
    path:'*',
    component: NoFound
  }
];

const router = new VueRouter({
  routes
});

export default router;
