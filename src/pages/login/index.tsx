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
import { shapesOutline } from 'ionicons/icons';
import { useState } from 'react';
import { Redirect, useHistory } from 'react-router';
import { Action } from '../../components/Action';
import CustomField from '../../components/CustomField';
import { Wave } from '../../components/Wave';
import { useFormInput, validateForm } from '../../utils';

import './style.scss';
import { useAuth } from '../../hooks/auth';

export const useLoginFields = () => {
  return [
    {
      id: 'email',
      label: 'Email',
      required: true,
      input: {
        props: {
          type: 'email',
          placeholder: 'braga@bragaservices.com',
        },
        state: useFormInput(''),
      },
    },
    {
      id: 'password',
      label: 'Password',
      required: true,
      input: {
        props: {
          type: 'password',
          placeholder: '*******',
        },
        state: useFormInput(''),
      },
    },
  ];
};

const Login: React.FC<any> = () => {
  const { loggedIn } = useAuth();

  const [errors, setErrors] = useState<any[]>([]);
  const [errorAPI, setErrorAPI] = useState<boolean>(false);

  const history = useHistory();

  const simulateLoginFindUserAPI = () => {
    const users = localStorage.getItem('@Users');
    if (users) {
      return JSON.parse(users);
    }
    return '';
  };

  const findValue = (name: string): any => {
    return fields.find((v) => v.id === name)?.input.state.value;
  };

  const fields = useLoginFields();
  const handleClick = () => {
    const err: any[] = validateForm(fields);
    setErrors(err);
    if (!err.length) {
      const user = simulateLoginFindUserAPI();
      if (user === '') setErrorAPI(true);
      if (user?.email === findValue('email') && user?.password === findValue('password')) {
        history.push('/tabs/home');
      } else {
        setErrorAPI(true);
      }
    }
  };

  if (loggedIn) {
    return <Redirect to="/tabs/home" />;
  }

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start" color="light">
            <IonBackButton color="light" />
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
              <IonCardTitle>Log in</IonCardTitle>
              {errorAPI ? (
                <h5>Verificar usuário e senha!</h5>
              ) : (
                <h5>Bem vindo de volta, espero que você esteja bem.</h5>
              )}
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol size="12">
              {fields.map((field: any, idx: any) => (
                <CustomField key={idx} field={field} errors={errors} />
              ))}
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol>
              <IonButton className="custom-button" expand="block" onClick={handleClick}>
                Submit
              </IonButton>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
      <IonFooter>
        <IonGrid className="ion-no-margin ion-no-padding">
          <Action message="Don't have an account?" text="Sign up" link="/signup" />
          <Wave />
        </IonGrid>
      </IonFooter>
    </IonPage>
  );
};

export default Login;
