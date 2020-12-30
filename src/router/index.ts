import Vue from 'vue';
import VueRouter, {RouteConfig} from 'vue-router';

import Money from '@/views/Money.vue';
import Labels from '@/views/Labels.vue';
import Statistics from '@/views/Statistics.vue';
import NotFound from '@/views/NotFound.vue';
import EditLabel from '@/views/EditLabel.vue';

Vue.use(VueRouter);


//这个router 是个数组，导出了
const routes: Array<RouteConfig> = [
  // 默认路径
  {
    path: '/',
    redirect: '/money'
  },

  {
    path: '/money',
    component: Money
  },
  {
    path: '/labels',
    component: Labels
  },
  {
    path: '/statistics',
    component: Statistics
  },
  {
    path: '/labels/edit',
    component: EditLabel
  },
  {
    path: '*',   //路由从上往下找 ，星号表示所有的
    component: NotFound
  },



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
];

const router = new VueRouter({
  routes
});

export default router;
