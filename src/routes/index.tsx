import React from 'react';
import { createHashRouter } from 'react-router-dom';
import type { RouteObject } from 'react-router-dom';
import { routes as configRoutes } from './config';
import { SyncRoute } from './type';
import ErrorBoundary from '@/components/ErrorBoundary';

const buildSyncRoute = (routes: SyncRoute[]): RouteObject[] => {
  const syncRoutes: RouteObject[] = [];
  routes.forEach((route) => {
    const { component: Component, element, children, id, loader, ...others } = route;

    syncRoutes.push({
      ...others,
      id,
      loader: async (...params) => {
        if (id === 'index') return loader?.(...params);

        const res = await loader?.(...params);
        // 传入当前菜单配置中的部分数据，供页面内直接通过useLoaderData获取
        return { title: route.title, ...(res || {}) };
      },
      path: route.path,
      element: Component ? (
        <Component />
      ) : (
        element
      ),
      errorElement: <ErrorBoundary />,
      children: children && buildSyncRoute(children),
    });
  });

  return syncRoutes;
};

export default createHashRouter(buildSyncRoute(configRoutes));