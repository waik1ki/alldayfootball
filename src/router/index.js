import Vue from 'vue';
import VueRouter from 'vue-router';
import axios from 'axios';
axios.defaults.headers['Pragma'] = 'no-cache';
// import bus from '../utils/bus'

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Main',
    component: () => import('../views/Main.vue'),
    // beforeEnter: (to,from,next) => {
    //   bus.$emit('start:loading');
    //   setTimeout( ()=>{next()},0 );
    // },
  },
  {
    path: '/introduce',
    name: 'ㅑntroduce',
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
    // beforeEnter: (to,from,next) => {
    //   bus.$emit('start:loading');
    //   setTimeout( ()=>{next()},0 );
    // },
  },
  {
    path: '/articleView',
    name: 'Articleview',
    component: () => import('../views/Articleview.vue'),
    // beforeEnter: (to,from,next) => {
    //   bus.$emit('start:loading');
    //   setTimeout( ()=>{next()},0 );
    // },
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
    component: () => import('../views/Admin.vue'),
    beforeEnter: (to, from, next) => {
      var thisUrl = window.location.href;
      thisUrl = thisUrl.substring(7, 10);
      if (thisUrl === 'www') {
        axios
          .get('http://www.alldayfootball.co.kr/api/auth/check')
          .then(res => {
            // console.log(res.data);
            if (res.data === 'not_logged' || res.data === 'not_admin') {
              router.push('/login');
              return;
            } else {
              if (res.data.info.admin) {
                // router.push('/admin/article');
                next();
                return;
              }
            }
          });
      } else {
        axios.get('http://alldayfootball.co.kr/api/auth/check').then(res => {
          // console.log(res.data);
          if (res.data === 'not_logged' || res.data === 'not_admin') {
            router.push('/login');
            return;
          } else {
            if (res.data.info.admin) {
              // router.push('/admin/article');
              next();
              return;
            }
          }
        });
      }
    },
    children: [
      {
        path: '/admin/write',
        name: 'Write',
        component: () => import('../components/Admin/Write.vue'),
        beforeEnter: (to, from, next) => {
          var thisUrl = window.location.href;
          thisUrl = thisUrl.substring(7, 10);
          if (thisUrl === 'www') {
            axios
              .get('http://www.alldayfootball.co.kr/api/auth/check')
              .then(res => {
                // console.log(res.data);
                if (res.data === 'not_logged' || res.data === 'not_admin') {
                  alert('권한이 없습니다.');
                  router.push('/admin/login');
                  return;
                } else {
                  if (res.data.info.admin) {
                    next();
                    return;
                  }
                }
              });
          } else {
            axios
              .get('http://alldayfootball.co.kr/api/auth/check')
              .then(res => {
                // console.log(res.data);
                if (res.data === 'not_logged' || res.data === 'not_admin') {
                  alert('권한이 없습니다.');
                  router.push('/admin/login');
                  return;
                } else {
                  if (res.data.info.admin) {
                    next();
                    return;
                  }
                }
              });
          }
        },
      },
      {
        path: '/admin/edit',
        name: 'Edit',
        component: () => import('../components/Admin/Edit.vue'),
        beforeEnter: (to, from, next) => {
          var thisUrl = window.location.href;
          thisUrl = thisUrl.substring(7, 10);
          if (thisUrl === 'www') {
            axios
              .get('http://www.alldayfootball.co.kr/api/auth/check')
              .then(res => {
                // console.log(res.data);
                if (res.data === 'not_logged' || res.data === 'not_admin') {
                  alert('권한이 없습니다.');
                  router.push('/admin/login');
                  return;
                } else {
                  if (res.data.info.admin) {
                    next();
                    return;
                  }
                }
              });
          } else {
            axios
              .get('http://alldayfootball.co.kr/api/auth/check')
              .then(res => {
                // console.log(res.data);
                if (res.data === 'not_logged' || res.data === 'not_admin') {
                  alert('권한이 없습니다.');
                  router.push('/admin/login');
                  return;
                } else {
                  if (res.data.info.admin) {
                    next();
                    return;
                  }
                }
              });
          }
        },
      },
      {
        path: '/admin/article',
        name: 'Article',
        component: () => import('../components/Admin/Article.vue'),
        beforeEnter: (to, from, next) => {
          var thisUrl = window.location.href;
          thisUrl = thisUrl.substring(7, 10);
          if (thisUrl === 'www') {
            axios
              .get('http://www.alldayfootball.co.kr/api/auth/check')
              .then(res => {
                // console.log(res.data);
                if (res.data === 'not_logged' || res.data === 'not_admin') {
                  alert('권한이 없습니다.');
                  router.push('/admin/login');
                  return;
                } else {
                  if (res.data.info.admin) {
                    next();
                    return;
                  }
                }
              });
          } else {
            axios
              .get('http://alldayfootball.co.kr/api/auth/check')
              .then(res => {
                // console.log(res.data);
                if (res.data === 'not_logged' || res.data === 'not_admin') {
                  alert('권한이 없습니다.');
                  router.push('/admin/login');
                  return;
                } else {
                  if (res.data.info.admin) {
                    next();
                    return;
                  }
                }
              });
          }
        },
      },
      {
        path: '/admin/ad',
        name: 'Ad',
        component: () => import('../components/Admin/Ad.vue'),
        beforeEnter: (to, from, next) => {
          var thisUrl = window.location.href;
          thisUrl = thisUrl.substring(7, 10);
          if (thisUrl === 'www') {
            axios
              .get('http://www.alldayfootball.co.kr/api/auth/check')
              .then(res => {
                // console.log(res.data);
                if (res.data === 'not_logged' || res.data === 'not_admin') {
                  alert('권한이 없습니다.');
                  router.push('/admin/login');
                  return;
                } else {
                  if (res.data.info.superAdmin) {
                    next();
                    return;
                  } else {
                    alert('권한이 없습니다.');
                    router.push('/admin/article');
                    return;
                  }
                }
              });
          } else {
            axios
              .get('http://alldayfootball.co.kr/api/auth/check')
              .then(res => {
                // console.log(res.data);
                if (res.data === 'not_logged' || res.data === 'not_admin') {
                  alert('권한이 없습니다.');
                  router.push('/admin/login');
                  return;
                } else {
                  if (res.data.info.superAdmin) {
                    next();
                    return;
                  } else {
                    alert('권한이 없습니다.');
                    router.push('/admin/article');
                    return;
                  }
                }
              });
          }
        },
      },
      {
        path: '/admin/accout',
        name: 'Accout',
        component: () => import('../components/Admin/Accout.vue'),
        beforeEnter: (to, from, next) => {
          var thisUrl = window.location.href;
          thisUrl = thisUrl.substring(7, 10);
          if (thisUrl === 'www') {
            axios
              .get('http://www.alldayfootball.co.kr/api/auth/check')
              .then(res => {
                // console.log(res.data);
                if (res.data === 'not_logged' || res.data === 'not_admin') {
                  alert('권한이 없습니다.');
                  router.push('/admin/login');
                  return;
                } else {
                  if (res.data.info.superAdmin) {
                    next();
                    return;
                  } else {
                    alert('권한이 없습니다.');
                    router.push('/admin/article');
                    return;
                  }
                }
              });
          } else {
            axios
              .get('http://alldayfootball.co.kr/api/auth/check')
              .then(res => {
                // console.log(res.data);
                if (res.data === 'not_logged' || res.data === 'not_admin') {
                  alert('권한이 없습니다.');
                  router.push('/admin/login');
                  return;
                } else {
                  if (res.data.info.superAdmin) {
                    next();
                    return;
                  } else {
                    alert('권한이 없습니다.');
                    router.push('/admin/article');
                    return;
                  }
                }
              });
          }
        },
      },
      {
        path: '/admin/configtext',
        name: 'Configtext',
        component: () => import('../components/Admin/ConfigText.vue'),
        beforeEnter: (to, from, next) => {
          var thisUrl = window.location.href;
          thisUrl = thisUrl.substring(7, 10);
          if (thisUrl === 'www') {
            axios
              .get('http://www.alldayfootball.co.kr/api/auth/check')
              .then(res => {
                // console.log(res.data);
                if (res.data === 'not_logged' || res.data === 'not_admin') {
                  alert('권한이 없습니다.');
                  router.push('/admin/login');
                  return;
                } else {
                  if (res.data.info.superAdmin) {
                    next();
                    return;
                  } else {
                    alert('권한이 없습니다.');
                    router.push('/admin/article');
                    return;
                  }
                }
              });
          } else {
            axios
              .get('http://alldayfootball.co.kr/api/auth/check')
              .then(res => {
                // console.log(res.data);
                if (res.data === 'not_logged' || res.data === 'not_admin') {
                  alert('권한이 없습니다.');
                  router.push('/admin/login');
                  return;
                } else {
                  if (res.data.info.superAdmin) {
                    next();
                    return;
                  } else {
                    alert('권한이 없습니다.');
                    router.push('/admin/article');
                    return;
                  }
                }
              });
          }
        },
      },
    ],
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
