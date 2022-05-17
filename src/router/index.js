import Vue from 'vue';
import VueRouter from 'vue-router';
import store from '@/store/index';

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
      component: () => import('@/views/article/ArticleListPage.vue'),
    },
    {
      path: '/article/view',
      component: () => import('@/views/article/ArticleViewPage.vue'),
    },
    {
      path: '/login',
      component: () => import('@/views/LoginPage.vue'),
    },
    {
      path: '/policy/youthpolicy',
      component: () => import('@/views/policy/YouthPolicyPage.vue'),
    },
    {
      path: '/policy/service',
      component: () => import('@/views/policy/ServicePage.vue'),
    },
    {
      path: '/policy/privacy',
      component: () => import('@/views/policy/PrivacyPage.vue'),
    },
    {
      // 로그인부분 오류 수정 예정
      path: '/admin',
      component: () => import('@/views/admin/AdminMainPage.vue'),
      meta: { auth: true },
      children: [
        {
          path: 'article',
          component: () => import('@/views/admin/AdminArticlePage.vue'),
          meta: { auth: true },
        },
        {
          path: 'accout',
          component: () => import('@/views/admin/AdminAccountPage.vue'),
          meta: { auth: true },
        },
        {
          path: 'review',
          component: () => import('@/views/admin/AdminReviewPage.vue'),
          meta: { auth: true },
        },
        {
          path: 'footer',
          component: () => import('@/views/admin/AdminFooterEditPage.vue'),
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
