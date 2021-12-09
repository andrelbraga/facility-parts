import React from 'react';
import { IonItem, IonLabel, IonThumbnail } from '@ionic/react';
import './style.scss';

const BookmarksContainer: React.FC = () => {
  return (
    <div>
      <ListBookmarks />
    </div>
  );
};

const ListBookmarks: React.FC = () => {
  const products = [
    {
      img: 'https://http2.mlstatic.com/D_Q_NP_2X_744304-MLA46082341004_052021-G.webp',
      name: 'Apple iPhone 12 (64 Gb) - Preto',
      price: '4.999',
      options: '12x R$416,58 sem juros',
    },
    {
      img: '	https://http2.mlstatic.com/D_Q_NP_2X_780801-MLA48157862255_112021-G.webp',
      name: ' Moto G60 Dual Sim 128 Gb Champagne 6 Gb Ram',
      price: '1.899',
      options: '12x R$158,58 sem juros',
    },
    {
      img: 'https://http2.mlstatic.com/D_Q_NP_2X_780801-MLA48157862255_112021-G.webp',
      name: 'Moto C60 Dual Sim 128 Gb Azul 6 Gb Ram',
      price: '1.899',
      options: '12x R$158,58 sem juros',
    },
    {
      img: 'https://http2.mlstatic.com/D_Q_NP_2X_643793-MLA45687263151_042021-T.webp',
      name: ' Moto G30 Dual Sim 128 Gb Dark Prism 4 Gb Ram',
      price: '1.397',
      options: '12x R$116,58 sem juros',
    },
  ];
  return (
    <div>
      {products.map((product) => (
        <IonItem>
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
