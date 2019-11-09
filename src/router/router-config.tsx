import React from 'react';
import { Parent } from '../components/parent/index';
import { Effect } from '../components/hooks/effect';

interface RouteItem {
  path: string;
  component: React.FC;
  exact?: boolean;
}

const routeConfig: RouteItem[] = [
  {
    path: '/',
    component: Parent,
    exact: true
  },
  {
    path: 'effect',
    component: Effect
  }
];

export default routeConfig;
