import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react/swiper-react.js';
import { Autoplay, Keyboard, Pagination, Scrollbar, Zoom } from 'swiper';
import './style.scss';
import { IonCard, IonCardContent, IonItem, IonLabel, IonThumbnail } from '@ionic/react';
import data from '../../data/mock.json';
import { useHistory } from 'react-router';

const HomeContainer: React.FC = () => {
  return (
    <div>
      <Highlights />
      <LastSee />
      <DayOffer />
    </div>
  );
};

const Highlights: React.FC = () => {
  return (
    <Swiper modules={[Autoplay, Keyboard, Pagination, Scrollbar, Zoom]} pagination={{ clickable: true }}>
      {data.home.highlights.map((highlight, idx) => (
        <SwiperSlide key={idx} className="border">
          <img src={highlight.img} alt={highlight.desc} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

const LastSee: React.FC = () => {
  const history = useHistory();
  const viewProduct = (product: any) => {
    history.push('/tabs/product', product);
  };

  return (
    <Swiper spaceBetween={5} slidesPerView={2}>
      {data.home.last_see.map((product, idx) => (
        <SwiperSlide key={idx} className="border">
          <IonCard onClick={() => viewProduct(product)}>
            <IonCardContent>
              <img
                width="224"
                height="224"
                decoding="async"
                src={product.img}
                className="ui-search-result__image"
                alt={product.desc}
              />
              <IonLabel>{product.desc}</IonLabel>
              <div className="info">
                <label htmlFor="forPrice">{product.price}</label>
                <label htmlFor="frete">{product.frete}</label>
                <label htmlFor="desc">{product.available}</label>
              </div>
            </IonCardContent>
          </IonCard>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

const DayOffer: React.FC = () => {
  return (
    <div>
      {data.home.offer.map((product, idx) => (
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

export default HomeContainer;
