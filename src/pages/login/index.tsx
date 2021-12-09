import {
  IonApp,
  IonButton,
  IonCol,
  IonContent,
  IonGrid,
  IonHeader,
  IonInput,
  IonRow,
  IonTitle,
  IonToolbar,
} from '@ionic/react';
import { useState } from 'react';
import './style.scss';

const Login: React.FC<any> = ({ handleClick }) => {
  const [email, setEmail] = useState<any>();
  const [pass, setPass] = useState<any>();

  return (
    <IonApp>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Facility Parts.</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="form-login">
        <IonGrid>
          <IonRow>
            <IonCol>
              <IonInput
                type="email"
                placeholder="email"
                value={email}
                clearInput
                onIonChange={(event) => setEmail(event.detail.value)}
              ></IonInput>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol>
              <IonInput
                type="password"
                placeholder="password"
                value={pass}
                clearInput
                onIonChange={(event) => setPass(event.detail.value)}
              ></IonInput>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol>
              <IonButton shape="round" expand="full" color="medium" onClick={handleClick}>
                Submit
              </IonButton>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonApp>
  );
};

export default Login;
