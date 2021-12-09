import { IonApp, IonIcon, IonLabel, IonRouterOutlet, IonTabBar, IonTabButton, IonTabs } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { homeOutline, heartOutline, bagOutline, notificationsOutline, menuOutline } from 'ionicons/icons';

import { Redirect, Route } from 'react-router';
import Home from '../home';
import More from '../more';
import Notifications from '../notifications';
import Purchase from '../purchases';
import Bookmark from '../bookmarks';
import Login from '../login';
import { useState } from 'react';

const Main: React.FC = () => {
  const [isAuth, setAuth] = useState<any>(false);

  return (
    <IonApp>
      {isAuth ? (
        <Login handleClick={() => setAuth(false)} />
      ) : (
        <IonReactRouter>
          <IonTabs>
            <IonRouterOutlet id="router-outlet">
              <Route exact path="/home">
                <Home />
              </Route>
              <Route exact path="/bookmark">
                <Bookmark />
              </Route>
              <Route exact path="/purchase">
                <Purchase />
              </Route>
              <Route exact path="/notifications">
                <Notifications />
              </Route>
              <Route exact path="/More">
                <More />
              </Route>
              <Route exact path="/">
                <Redirect to="/home" />
              </Route>
            </IonRouterOutlet>
            <IonTabBar slot="bottom">
              <IonTabButton tab="home" href="/home">
                <IonIcon icon={homeOutline} />
                <IonLabel>Home</IonLabel>
              </IonTabButton>
              <IonTabButton tab="bookmark" href="/bookmark">
                <IonIcon icon={heartOutline} />
                <IonLabel>Bookmarks</IonLabel>
              </IonTabButton>
              <IonTabButton tab="purchase" href="/purchase">
                <IonIcon icon={bagOutline} />
                <IonLabel>My Purchases</IonLabel>
              </IonTabButton>
              <IonTabButton tab="notifications" href="/notifications">
                <IonIcon icon={notificationsOutline} />
                <IonLabel>Notifications</IonLabel>
              </IonTabButton>
              <IonTabButton tab="more" href="/more">
                <IonIcon icon={menuOutline} />
                <IonLabel>More</IonLabel>
              </IonTabButton>
            </IonTabBar>
          </IonTabs>
        </IonReactRouter>
      )}
    </IonApp>
  );
};

export default Main;
