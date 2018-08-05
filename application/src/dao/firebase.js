import * as firebase from 'firebase';
import {
  FB_DEV_API_KEY,
  FB_DEV_AUTH_DOMAIN,
  FB_DEV_DATABASE_URL,
  FB_DEV_PROJECT_ID,
  FB_DEV_STORAGE_BUCKET,
  FB_DEV_MESSAGING_SENDER_ID
} from 'react-native-dotenv'

const config = {
  apiKey: FB_DEV_API_KEY,
  authDomain: FB_DEV_AUTH_DOMAIN,
  databaseURL: FB_DEV_DATABASE_URL,
  projectId: FB_DEV_PROJECT_ID,
  storageBucket: FB_DEV_STORAGE_BUCKET,
  messagingSender_Id: FB_DEV_MESSAGING_SENDER_ID
};

export function firebaseInit() {
  firebase.initializeApp(config);
}

export default firebase;