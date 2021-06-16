import { IonButton, IonContent, IonPage } from '@ionic/react'
import React from 'react'

const PageFour = ({ history }) => {
  return (
    <IonPage>
      <IonContent fullscreen>
        <p>This is Page Four!</p>
        <IonButton onClick={() => history.push('/pageone')}>
          Go to page one
        </IonButton>
      </IonContent>
    </IonPage>
  )
}

export default PageFour
