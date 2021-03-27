//Import Firebase
import firebase from 'firebase'

//1)Initialize the application
const firebaseApp =firebase.initializeApp ({
    apiKey: "AIzaSyBN3L8hoRBF54D_9Jp2fNd5efYyzDNrICY",
    authDomain: "clone-e92c9.firebaseapp.com",
    projectId: "clone-e92c9",
    storageBucket: "clone-e92c9.appspot.com",
    messagingSenderId: "247816780563",
    appId: "1:247816780563:web:b1820c0f0083b2d11838e6"
  });

//2)use the db here the db is firestore 
const db=firebase.firestore();

//




export { db }
 