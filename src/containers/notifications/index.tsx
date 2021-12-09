import React from 'react';
import { IonIcon } from '@ionic/react';
import { notificationsOutline } from 'ionicons/icons';
import './style.scss';

const NotificationContainer: React.FC = () => {
  return (
    <div className="container">
      <div className="notifications">
        <IonIcon icon={notificationsOutline} />
        <strong>Não há notificações</strong>
        <p>Aproveite para conhecer nossos produtos!</p>
      </div>
    </div>
  );
};

export default NotificationContainer;
