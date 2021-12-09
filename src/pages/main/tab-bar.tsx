import {
  IonIcon,
  IonLabel,
  IonTabBar,
  IonTabButton,
} from '@ionic/react';
import { homeOutline, heartOutline, bagOutline, notificationsOutline, menuOutline  } from 'ionicons/icons';

const TabBar: React.FC = () => (
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
);

export default TabBar;
