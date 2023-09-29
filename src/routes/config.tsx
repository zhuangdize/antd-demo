import { Navigate } from 'react-router-dom';
import React from 'react';
import { SyncRoute } from './type';
// import { rootLoader } from './loader';

// 菜单路由，如果配置的路由不包含id的话，将不会展示在菜单中
// export const menuRoutes: SyncRoute[] = [
//   {
//     path: '/monitor',
//     id: 'monitor',
//     title: '',
//     icon: 'monitor',
//   },
//   {
//     path: '/event',
//     id: 'event',
//     title: '',
//     icon: 'event',
//   }
// ];

// path配置时最好使用完整路径
export const routes: SyncRoute[] = [
  {
    path: '/index',
    component: React.lazy(() => import('@/App')),
  },
  {
    path: '/login',
    component: React.lazy(() => import('@/pages/login')),
  },
];
