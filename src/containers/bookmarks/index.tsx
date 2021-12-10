import React from 'react';
import { IonItem, IonLabel, IonThumbnail } from '@ionic/react';
import './style.scss';
import data from '../../data/mock.json';

const BookmarksContainer: React.FC = () => {
  return (
    <div>
      <ListBookmarks />
    </div>
  );
};

const ListBookmarks: React.FC = () => {
  return (
    <div>
      {data.bookmarks.map((product, idx) => (
        <IonItem key={idx}>
          <IonThumbnail slot="start">
            <img height="114" width="114" decoding="async" src={product.img} alt={product.name} />
          </IonThumbnail>
          <IonLabel>
            {product.name}
            <p>R${product.price}</p>
            <p>{product.options}</p>
          </IonLabel>
        </IonItem>
      ))}
    </div>
  );
};

export default BookmarksContainer;
