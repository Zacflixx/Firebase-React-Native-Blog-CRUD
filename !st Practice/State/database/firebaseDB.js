// database/firebaseDb.js

import * as firebase from 'firebase';
import firestore from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyDiUqNz2p7mAALyemIxtTmo05Y39d5IKE0',
  authDomain: 'reactnativefirebasecrud-29030.firebaseapp.com',
  databaseURL:
    'https://reactnativefirebasecrud-29030-default-rtdb.firebaseio.com/',
  projectId: 'reactnativefirebasecrud-29030',
  storageBucket: 'reactnativefirebasecrud-29030.appspot.com',
  messagingSenderId: '846274467252',
  appId: '1:846274467252:android:708f3f4aec239b547c8ee1',
};

firebase.initializeApp(firebaseConfig);

firebase.firestore();

export default firebase;
// Compatible side by side NDK version was not found
