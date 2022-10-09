import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyA4a9rUyBxEwztcNLaWEU71jwTeigQy25s",
    authDomain: "olx-clone-62607.firebaseapp.com",
    projectId: "olx-clone-62607",
    storageBucket: "olx-clone-62607.appspot.com",
    messagingSenderId: "335962251071",
    appId: "1:335962251071:web:e678d855c92eb84dbfbd8a"
  };

export const Firebase=  firebase.initializeApp(firebaseConfig)