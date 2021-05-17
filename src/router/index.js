import Vue from 'vue';
import Router from 'vue-router';

import Base from '@/components/Layout/Base';
import AuthForm from '@/components/Layout/Auth'
import ManagementIndex from '@/components/management/Index';

Vue.use(Router);

function requireAuth(to, from, next) {
  if (!loggedIn()) {
    window.location.href = '/auth';
  } else {
    next();
  }
}

function loggedIn() {
  if (localStorage.authHeaders) {
    return true;
  } else {
    return false;
  }
}

const routes = [
  {
    path: '/auth',
    name: 'auth',
    component: AuthForm
  },
  {
    path: '',
    component: Base,
    props: true,

    children: [
      {
        path: '/management-panel',
        name: 'ManagementIndex',
        props: true,
        component: ManagementIndex,
        beforeEnter: requireAuth
      }
    ]
  }
];

const router = new Router({
  routes,
  mode: 'history',
});

export default router
