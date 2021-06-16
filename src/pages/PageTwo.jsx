import { IonButton, IonContent, IonPage } from '@ionic/react'
import React from 'react'

const PageTwo = ({ history }) => {
  return (
    <IonPage>
      <IonContent fullscreen>
        <p>This is Page Two!</p>
        <IonButton onClick={() => history.push('/pagethree')}>
          Go to page three
        </IonButton>
      </IonContent>
    </IonPage>
  )
}

export default PageTwo
