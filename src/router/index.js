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
      component: () => import('@/views/MainPage.vue'),
    },
    {
      path: '/introduce',
      component: () => import('@/views/IntroducePage.vue'),
    },
    {
      path: '/article/list',
      component: () => import('@/views/Article/ArticleListPage.vue'),
    },
    {
      path: '/article/view',
      component: () => import('@/views/Article/ArticleViewPage.vue'),
    },
    {
      path: '/login',
      component: () => import('@/views/LoginPage.vue'),
    },
    {
      path: '/policy/youthpolicy',
      component: () => import('@/views/Policy/YouthPolicyPage.vue'),
    },
    {
      path: '/policy/service',
      component: () => import('@/views/Policy/ServicePage.vue'),
    },
    {
      path: '/policy/privacy',
      component: () => import('@/views/Policy/PrivacyPage.vue'),
    },
    {
      // 로그인부분 오류 수정 예정
      path: '/admin',
      component: () => import('@/views/Admin/AdminMainPage.vue'),
      meta: { auth: true },
      children: [
        {
          path: 'write',
          component: () =>
            import('@/components/Admin/Article/AdminArticleWriteForm.vue'),
          meta: { auth: true },
        },
        {
          path: 'edit',
          component: () =>
            import('@/components/Admin/Article/AdminArticleEditForm.vue'),
          meta: { auth: true },
        },
        {
          path: 'article',
          component: () =>
            import('@/components/Admin/Article/AdminArticleList.vue'),
          meta: { auth: true },
        },
        {
          path: 'accout',
          component: () => import('@/views/Admin/AdminAccountPage.vue'),
          meta: { auth: true },
        },
        {
          path: 'review',
          component: () => import('@/views/Admin/AdminReviewPage.vue'),
          meta: { auth: true },
        },
        {
          path: 'footer',
          component: () => import('@/views/Admin/AdminFooterEditPage.vue'),
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
