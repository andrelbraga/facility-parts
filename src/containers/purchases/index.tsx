import React from 'react';
import { IonCard, IonCardHeader, IonCardTitle, IonItem, IonLabel, IonThumbnail } from '@ionic/react';
import data from '../../data/mock.json';

const PurchaseContainer: React.FC = () => {
  return (
    <div>
      <ListPuchases />
    </div>
  );
};

const ListPuchases: React.FC = () => {
  return (
    <div>
      {data.purchases.map((purchase, idx) => (
        <IonCard key={idx}>
          <IonCardHeader>
            <IonCardTitle>{purchase.datePurchase}</IonCardTitle>
          </IonCardHeader>

          {purchase.list.map((item) => (
            <IonItem>
              <IonThumbnail slot="start">
                <img height="114" width="114" decoding="async" src={item.img} alt={item.name} />
              </IonThumbnail>
              <IonLabel>
                {item.name}
                <p>R${item.price}</p>
                <p>{item.options}</p>
              </IonLabel>
            </IonItem>
          ))}
        </IonCard>
      ))}
    </div>
  );
};

export default PurchaseContainer;
