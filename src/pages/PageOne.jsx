import { IonButton, IonContent, IonPage } from '@ionic/react'
import React from 'react'

const PageOne = ({ history }) => {
  return (
    <IonPage>
      <IonContent fullscreen>
        <p>This is Page One!</p>
        <IonButton onClick={() => history.push('/pagetwo')}>
          Go to page two
        </IonButton>
      </IonContent>
    </IonPage>
  )
}

export default PageOne
