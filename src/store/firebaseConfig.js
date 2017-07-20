import firebase from 'firebase';

const config = {
    apiKey: "AIzaSyC-Ad_Ss1t6VGvgHLHEsOvd0HngI7Z0SrM",
    authDomain: "reactdirectories.firebaseapp.com",
    databaseURL: "https://reactdirectories.firebaseio.com",
    projectId: "reactdirectories",
    storageBucket: "reactdirectories.appspot.com",
    messagingSenderId: "99616177588"
};
firebase.initializeApp(config);
const firebaseConfig = firebase.database();

export default firebaseConfig;
