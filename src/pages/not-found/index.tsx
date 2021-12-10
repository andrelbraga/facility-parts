import { IonContent, IonPage } from '@ionic/react';
import React from 'react';

const NotFound: React.FC = () => {
  return (
    <IonPage>
      <IonContent className="ion-padding">Page not found.</IonContent>
    </IonPage>
  );
};

export default NotFound;
