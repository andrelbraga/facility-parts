import { IonRouterOutlet } from '@ionic/react';

import { Redirect, Route } from 'react-router';
import Login from '../login';
import Signup from '../signup';

const LoginRouter: React.FC = () => {
  return (
    <IonRouterOutlet id="router-outlet">
      <Route exact path="/login" component={Login} />
      <Route exact path="/signup" component={Signup} />

      <Route exact path="/">
        <Redirect to="/login" />
      </Route>
    </IonRouterOutlet>
  );
};

export default LoginRouter;
