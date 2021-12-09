import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import BookmarksContainer from '../../containers/bookmarks';
import './style.scss';

const Bookmark: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Bookmark</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Bookmark</IonTitle>
          </IonToolbar>
        </IonHeader>
        <BookmarksContainer />
      </IonContent>
    </IonPage>
  );
};

export default Bookmark;
