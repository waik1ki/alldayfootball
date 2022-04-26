import Vue from 'vue';
import VueRouter from 'vue-router';
import axios from 'axios';
import store from '@/store/index';
axios.defaults.headers['Pragma'] = 'no-cache';

Vue.use(VueRouter);
const router = new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Main',
      component: () => import('../views/Main.vue'),
    },
    {
      path: '/introduce',
      name: 'Introduce',
      component: () => import('../views/Introduce.vue'),
    },
    {
      path: '/help',
      name: 'Help',
      component: () => import('../components/Help.vue'),
    },
    {
      path: '/policy',
      name: 'Policy',
      component: () => import('../components/Policy.vue'),
    },
    {
      path: '/terms-of-use',
      name: 'Terms',
      component: () => import('../components/Terms.vue'),
    },
    {
      path: '/privacy-policy',
      name: 'PrivacyPolicy',
      component: () => import('../components/PrivacyPolicy.vue'),
    },
    {
      path: '/articleList',
      name: 'Articlelist',
      component: () => import('../views/Articlelist.vue'),
    },
    {
      path: '/articleView',
      name: 'Articleview',
      component: () => import('../views/Articleview.vue'),
    },
    {
      path: '/login',
      name: 'Login',
      component: () => import('../components/Admin/Login.vue'),
    },
    {
      // 로그인부분 오류 수정 예정
      path: '/admin',
      name: 'Admin',
      component: () => import('@/views/Admin.vue'),
      meta: { auth: true },
      children: [
        {
          path: '/admin/write',
          name: 'Write',
          component: () => import('../components/Admin/Write.vue'),
          meta: { auth: true },
        },
        {
          path: '/admin/edit',
          name: 'Edit',
          component: () => import('../components/Admin/Edit.vue'),
          meta: { auth: true },
        },
        {
          path: '/admin/article',
          name: 'Article',
          component: () => import('../components/Admin/Article.vue'),
          meta: { auth: true },
        },
        {
          path: '/admin/accout',
          name: 'Accout',
          component: () => import('../components/Admin/Account/Accout.vue'),
          meta: { auth: true },
        },
        {
          path: '/admin/configtext',
          name: 'Configtext',
          component: () => import('../components/Admin/ConfigText.vue'),
          meta: { auth: true },
        },
      ],
    },
  ],
});

router.beforeEach(async (to, from, next) => {
  if (to.meta.auth && !store.getters.isLogin) {
    next('/login');
    return;
  }

  if (to.name === 'Login' && store.getters.isLogin) {
    next('/admin');
    return;
  }

  next();
});

export default router;
