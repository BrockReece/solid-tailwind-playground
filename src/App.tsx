import { Component, lazy } from 'solid-js';
import { Router, useRoutes } from 'solid-app-router';

import { channelTypeDataFunction } from './store/channelTypes';
import Nav from './components/Nav';

const routes = [
  {
    path: '/',
    component: lazy(() => import('./views/Home'))
  },
  {
    path: '/about',
    component: lazy(() => import('./views/About'))
  },
  {
    path: "/channel-types",
    component: lazy(() => import('./views/ChannelTypes')),
    children: [
      { path: "/", component: lazy(() => import('./views/ChannelTypes/index')) },
      {
        path: "/:id",
        component: lazy(() => import('./views/ChannelTypes/[id]')),
        data: channelTypeDataFunction
      }
    ]
  },
  {
    path: "*all",
    component: lazy(() => import('./views/NotFound'))
  }
];

const App: Component = () => {
  const Route = useRoutes(routes)
  return (
    <Router>
      <Nav />
      <Route />
    </Router>
  );
};

export default App;