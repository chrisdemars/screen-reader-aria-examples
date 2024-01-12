import React, { useState } from 'react';
import { IonCheckbox, IonLabel, IonItem } from '@ionic/react';

const CheckedInput: React.FC = () => {
  const [isChecked, setChecked] = useState(true); // Initial checked state for the checkbox with aria-checked

  const handleCheckboxToggle = () => {
    setChecked(!isChecked); // Toggle the checked state
  };

  return (
    <div>
      {/* Regular Checkbox */}
      <IonItem>
        <IonLabel>Pepperoni</IonLabel>
        <IonCheckbox slot="start" />
      </IonItem>

      {/* Another Regular Checkbox */}
      <IonItem>
        <IonLabel>Mushroom</IonLabel>
        <IonCheckbox slot="start" />
      </IonItem>

      {/* Checkbox with aria-checked */}
      <IonItem>
        <IonLabel>Sausage</IonLabel>
        <IonCheckbox
          slot="start"
          aria-checked={isChecked ? "true" : "false"} // Convert boolean to string for aria-checked
          checked={isChecked}
          onIonChange={handleCheckboxToggle} // Handle checkbox change event
        />
      </IonItem>
    </div>
  );
};

export default CheckedInput;
