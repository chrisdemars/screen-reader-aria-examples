// InputComponents.tsx

import React from 'react';
import { IonInput, IonLabel, IonItem } from '@ionic/react';

const DisabledInput: React.FC = () => {
  return (
    <div>
      {/* Regular Input */}
      <IonItem>
        <IonLabel position="floating">Name</IonLabel>
        <IonInput type="text" placeholder="Enter first and last name"></IonInput>
      </IonItem>

      {/* Another Regular Input */}
      <IonItem>
        <IonLabel position="floating">Email</IonLabel>
        <IonInput type="email" placeholder="Enter your email"></IonInput>
      </IonItem>

      {/* Input with aria-disabled */}
      <IonItem>
        <IonLabel position="floating">SSN</IonLabel>
        <IonInput type="number" placeholder="This input is disabled" aria-disabled="true" disabled={true}></IonInput>
      </IonItem>
    </div>
  );
};

export default DisabledInput;
