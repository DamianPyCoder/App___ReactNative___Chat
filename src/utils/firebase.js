import firebase from 'firebase/app';

const firebaseConfig = {
  apiKey: 'AIzaSyDIdFBcBoemTNrZhCwouWI_V_bP_-YeUJw',
  authDomain: 'chat-2affd.firebaseapp.com',
  databaseURL: 'https://chat-2affd.firebaseio.com',
  projectId: 'chat-2affd',
  storageBucket: 'chat-2affd.appspot.com',
  messagingSenderId: '917737541161',
  appId: '1:917737541161:web:bc34bc53657087e6741638',
};

export default firebase.initializeApp(firebaseConfig);
