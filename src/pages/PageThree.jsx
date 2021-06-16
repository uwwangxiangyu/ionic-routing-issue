import { IonButton, IonContent, IonPage } from '@ionic/react'
import React from 'react'

const PageThree = ({ history }) => {
  return (
    <IonPage>
      <IonContent fullscreen>
        <p>This is Page Three!</p>
        <IonButton onClick={() => history.push('/pagefour')}>
          Go to page four
        </IonButton>
      </IonContent>
    </IonPage>
  )
}

export default PageThree
