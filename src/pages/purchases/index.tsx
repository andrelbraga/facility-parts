import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import PurchaseContainer from '../../containers/purchases';
import './style.scss';

const Purchase: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Purchase</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Purchase</IonTitle>
          </IonToolbar>
        </IonHeader>
        <PurchaseContainer />
      </IonContent>
    </IonPage>
  );
};

export default Purchase;
