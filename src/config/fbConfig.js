import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

var firebaseConfig = {
    apiKey: "AIzaSyADlB7r8J13yxmMDCeWXdU-2C4-Q-NgEpI",
    authDomain: "blogredux-6626d.firebaseapp.com",
    databaseURL: "https://blogredux-6626d.firebaseio.com",
    projectId: "blogredux-6626d",
    storageBucket: "blogredux-6626d.appspot.com",
    messagingSenderId: "301750554123"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.firestore().settings({})

export default firebase
