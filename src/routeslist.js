import asyncComponent from './components/AsyncComponent/index.js';

export const getMenuListData = () => [
  {
    component: asyncComponent(() => import('./components/login/login')),
    path: '/',
    exact: true
  },
  {
    component: asyncComponent(() => import('./components/login/login')),
    path: '/login',
    // exact: true
  },
  {
    component: asyncComponent(() => import('./components/Base/base')),
    path: '/Base',
    // exact: true,
    children: [
      {
        component: asyncComponent(() => import('./container/list')),
        path: '/Base/list',
        // exact: true
      },
      {
        component: asyncComponent(() => import('./container/edite')),
        path: '/Base/edite',
        // exact: true
      }
    ]
  }
]

