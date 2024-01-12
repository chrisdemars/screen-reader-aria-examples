import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import DisabledInput from '../components/DisabledInput';
import './Home.css';

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Disabled Input Demo</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Contact Form</IonTitle>
          </IonToolbar>
        </IonHeader>
        <DisabledInput />
      </IonContent>
    </IonPage>
  );
};

export default Home;
