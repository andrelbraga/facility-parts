import { IonApp, IonLoading } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';

import { Redirect, Route, Switch } from 'react-router';

import { AuthContext, useAuthInit } from '../../hooks/auth';
import Login from '../login';
import Signup from '../signup';
import AppTabs from './app-tabs';
import NotFound from '../not-found';

const Main: React.FC = () => {
  const { loading, auth } = useAuthInit();
  if (loading) {
    return <IonLoading isOpen />;
  }
  return (
    <IonApp>
      <AuthContext.Provider value={auth}>
        <IonReactRouter>
          <Switch>
            <Route exact path="/login">
              <Login />
            </Route>
            <Route exact path="/signup">
              <Signup />
            </Route>
            <Route path="/tabs">
              <AppTabs />
            </Route>
            <Redirect exact path="/" to="/login" />
            <Route>
              <NotFound />
            </Route>
          </Switch>
        </IonReactRouter>
      </AuthContext.Provider>
    </IonApp>
  );
};

export default Main;
