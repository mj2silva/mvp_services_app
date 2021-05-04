import firebase from 'firebase';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyATrRpqVj8kMs7Z-UXqpergRiaw3iYBX_o',
  authDomain: 'numeral-test.firebaseapp.com',
  projectId: 'numeral-test',
  storageBucket: 'numeral-test.appspot.com',
  messagingSenderId: '280894803122',
  appId: '1:280894803122:web:dd86df386a1e68ab084dab',
  measurementId: 'G-5BZ9CF74K1',
};
// Initialize Firebase
if (firebase.apps.length === 0) {
  firebase.initializeApp(firebaseConfig);
}

export const firestore = firebase.firestore();
export const auth = firebase.auth();
