import { IonIcon, IonLabel, IonRouterOutlet, IonTabBar, IonTabButton, IonTabs } from '@ionic/react';
import { homeOutline, heartOutline, bagOutline, notificationsOutline, menuOutline } from 'ionicons/icons';

import { Route } from 'react-router';
import Home from '../home';
import More from '../more';
import Notifications from '../notifications';
import Purchase from '../purchases';
import Bookmark from '../bookmarks';
import Product from '../product';

const AppTabs: React.FC = () => {
  return (
    <IonTabs>
      <IonRouterOutlet id="router-outlet">
        <Route exact path="/tabs/home" component={Home} />
        <Route exact path="/tabs/bookmark" component={Bookmark} />
        <Route exact path="/tabs/purchase" component={Purchase} />
        <Route exact path="/tabs/notifications" component={Notifications} />
        <Route exact path="/tabs/more" component={More} />
        <Route exact path="/tabs/product" component={Product} />
      </IonRouterOutlet>
      <IonTabBar slot="bottom">
        <IonTabButton tab="home" href="/tabs/home">
          <IonIcon icon={homeOutline} />
          <IonLabel>Home</IonLabel>
        </IonTabButton>
        <IonTabButton tab="bookmark" href="/tabs/bookmark">
          <IonIcon icon={heartOutline} />
          <IonLabel>Bookmarks</IonLabel>
        </IonTabButton>
        <IonTabButton tab="purchase" href="/tabs/purchase">
          <IonIcon icon={bagOutline} />
          <IonLabel>My Purchases</IonLabel>
        </IonTabButton>
        <IonTabButton tab="notifications" href="/tabs/notifications">
          <IonIcon icon={notificationsOutline} />
          <IonLabel>Notifications</IonLabel>
        </IonTabButton>
        <IonTabButton tab="more" href="/tabs/more">
          <IonIcon icon={menuOutline} />
          <IonLabel>More</IonLabel>
        </IonTabButton>
      </IonTabBar>
    </IonTabs>
  );
};

export default AppTabs;
