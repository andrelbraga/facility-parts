import {
  IonBackButton,
  IonButtons,
  IonCard,
  IonCardContent,
  IonCol,
  IonContent,
  IonGrid,
  IonHeader,
  IonLabel,
  IonPage,
  IonRow,
  IonSplitPane,
  IonToolbar,
} from '@ionic/react';
import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router';
import './style.scss';

interface IProduct {
  img: string;
  desc: string;
  price: string;
  frete: string;
  available: string;
}

const Product: React.FC<any> = () => {
  const [state, setState] = useState<IProduct | any>();
  const location = useLocation();
  useEffect(() => {
    setState(location.state);
  }, [location]);
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start" color="light">
            <IonBackButton color="light" />
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonCard>
          <IonCardContent>
            <IonGrid>
              <IonRow>
                <IonCol size="12" className="ion-align-self-center center-img">
                  <img
                    width="224"
                    height="224"
                    decoding="async"
                    src={state?.img}
                    className="ui-search-result__image"
                    alt={state?.desc}
                  />
                </IonCol>
              </IonRow>
              <IonRow>
                <IonCol size="12">
                  <IonLabel>{state?.desc}</IonLabel>
                </IonCol>
              </IonRow>
              <IonSplitPane />
              <IonRow>
                <IonCol size="12">
                  <div className="info">
                    <label htmlFor="forPrice">{state?.price}</label>
                    <label htmlFor="frete">{state?.frete}</label>
                    <label htmlFor="desc">{state?.available}</label>
                  </div>
                </IonCol>
              </IonRow>
            </IonGrid>
          </IonCardContent>
        </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default Product;
