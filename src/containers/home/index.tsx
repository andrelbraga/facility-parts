import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react/swiper-react.js';
import { Autoplay, Keyboard, Pagination, Scrollbar, Zoom } from 'swiper';
import './style.scss';
import { IonCard, IonCardContent, IonItem, IonLabel, IonThumbnail } from '@ionic/react';

const HomeContainer: React.FC = () => {
  return (
    <div>
      <Slider />
      <LastSee />
      <DayOffer />
    </div>
  );
};

const Slider: React.FC = () => {
  return (
    <Swiper modules={[Autoplay, Keyboard, Pagination, Scrollbar, Zoom]} pagination={{ clickable: true }}>
      <SwiperSlide className="border">
        <img src="https://http2.mlstatic.com/D_NQ_603036-MLA48409395645_122021-OO.webp" alt="Veículos" />
      </SwiperSlide>
      <SwiperSlide className="border">
        <img src="https://http2.mlstatic.com/D_NQ_602317-MLA48396517726_112021-OO.webp" alt="Natal" />
      </SwiperSlide>
      <SwiperSlide className="border">
        <img src="https://http2.mlstatic.com/D_NQ_841188-MLA48431295528_122021-OO.webp" alt="Prepare Natal" />
      </SwiperSlide>
    </Swiper>
  );
};

const LastSee: React.FC = () => {
  const products = [
    {
      img: 'https://http2.mlstatic.com/D_NQ_NP_952600-MLB48010363964_102021-O.webp',
      desc: 'Protetor Magnético Removível Porta Carro - 4 Peças',
      price: 'R$ 129,90',
      frete: 'Frete Grátis',
      available: 'Disponível em 2 cores',
    },
    {
      img: 'https://http2.mlstatic.com/D_NQ_NP_627898-MLB46288222343_062021-O.webp',
      desc: 'Capa Banco Carro Gol Parati Voyage G2 G3 G4 G5 G6',
      price: 'R$ 139,90',
      frete: 'Frete Grátis',
      available: 'Disponível em 2 cores',
    },
    {
      img: 'https://http2.mlstatic.com/D_NQ_NP_998990-MLB47963837414_102021-O.webp',
      desc: 'Lampada Farol Led H4 Moto Ou Carro 8000k 6 Leds 65w',
      price: 'R$ 20,90',
      frete: 'Frete Grátis',
      available: 'Disponível em 2 cores',
    },
    {
      img: 'https://http2.mlstatic.com/D_NQ_NP_997000-MLB42093146594_062020-O.webp',
      desc: 'Jogo Tapete Carro Borracha Universal Pvc 4 Peças Preto',
      price: 'R$ 23,90',
      frete: 'Frete Grátis',
      available: 'Disponível em 2 cores',
    },
    {
      img: 'https://http2.mlstatic.com/D_NQ_NP_835927-MLA43120867314_082020-O.webp',
      desc: 'Pneu Pirelli Formula Evo P 175/70R13 82 T',
      price: 'R$ 369,90',
      frete: 'Frete Grátis',
      available: 'Disponível em 2 cores',
    },
    {
      img: 'https://http2.mlstatic.com/D_NQ_NP_745468-MLB48344327636_112021-O.webp',
      desc: 'Radio Automotivo Bluetooth Pendrive Sd',
      price: 'R$ 68,90',
      frete: 'Frete Grátis',
      available: 'Disponível em 2 cores',
    },
    {
      img: 'https://http2.mlstatic.com/D_NQ_NP_822387-MLB32084474148_092019-O.webp',
      desc: 'Adaptador Receptor Áudio Bluetooth P2 Som Carro',
      price: 'R$ 22,90',
      frete: 'Frete Grátis',
      available: 'Disponível em 2 cores',
    },
  ];
  return (
    <Swiper spaceBetween={5} slidesPerView={2}>
      {products.map((product) => (
        <SwiperSlide className="border">
          <IonCard>
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

export default HomeContainer;
