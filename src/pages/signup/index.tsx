import {
  IonBackButton,
  IonButton,
  IonButtons,
  IonCardTitle,
  IonCol,
  IonContent,
  IonFooter,
  IonGrid,
  IonHeader,
  IonIcon,
  IonPage,
  IonRow,
  IonToolbar,
} from '@ionic/react';
import { arrowBack, shapesOutline } from 'ionicons/icons';
import { useState } from 'react';
import { Action } from '../../components/Action';
import CustomField from '../../components/CustomField';
import { Wave } from '../../components/Wave';
import { useSignupFields, validateForm } from '../../utils';
import './style.scss';

const Signup: React.FC<any> = () => {
  const [errors, setErrors] = useState<any>([]);
  const fields = useSignupFields();

  const createAccount = () => {
    const errors = validateForm(fields);
    setErrors(errors);

    const findValue = (name: string): any => {
      return fields.find((v) => v.id === name)?.input.state.value;
    };

    const users = {
      login: findValue('name'),
      email: findValue('email'),
      password: findValue('password'),
    };

    if (!errors.length) {
      localStorage.setItem('@Users', JSON.stringify(users));
    }
  };
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton icon={arrowBack} text="" className="custom-back" />
          </IonButtons>

          <IonButtons slot="end">
            <IonButton className="custom-button">
              <IonIcon icon={shapesOutline} />
            </IonButton>
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent className="form-login">
        <IonGrid className="ion-padding">
          <IonRow>
            <IonCol size="12" className="headingText">
              <IonCardTitle>Sign up</IonCardTitle>
              <h5>Lets get to know each other</h5>
            </IonCol>
          </IonRow>

          <IonRow className="ion-margin-top ion-padding-top">
            <IonCol size="12">
              {fields.map((field) => {
                return <CustomField field={field} errors={errors} />;
              })}

              <IonButton className="custom-button" expand="block" onClick={createAccount}>
                Create account
              </IonButton>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
      <IonFooter>
        <IonGrid className="ion-no-margin ion-no-padding">
          <Action message="Already got an account?" text="Login" link="/login" />
          <Wave />
        </IonGrid>
      </IonFooter>
    </IonPage>
  );
};

export default Signup;
