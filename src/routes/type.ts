import { LazyExoticComponent } from 'react';
import type { RouteObject } from 'react-router-dom';

export type SyncRoute = {
  component?: LazyExoticComponent<() => JSX.Element>;
  children?: SyncRoute[];
  title?: string;
  root?: boolean;
  icon?: string;
  permission?: string;
} & Omit<RouteObject, 'children' | 'index'>;
