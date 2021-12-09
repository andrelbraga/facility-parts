import { Redirect, Route } from 'react-router-dom';
import { IonRouterOutlet } from '@ionic/react';

import Bookmark from '../bookmarks';
import Home from '../home';
import Purchase from '../purchases';
import Notifications from '../notifications';
import More from '../more';

const routes = [
  {
    path: '/home',
    component: Home,
    exact: true,
  },
  {
    path: '/bookmark',
    component: Bookmark,
    exact: true,
  },
  {
    path: '/purchase',
    component: Purchase,
    exact: true,
  },
  {
    path: '/notifications',
    component: Notifications,
    exact: true,
  },
  {
    path: '/more',
    component: More,
    exact: true,
  },
];

const RouterOutlet: React.FC = () => (
  <IonRouterOutlet id="router-outlet">
    {routes.map((route) => (
      <Route {...route} />
    ))}
    <Route exact path="/">
      <Redirect to="/home" />
    </Route>
  </IonRouterOutlet>
);

export default RouterOutlet;
