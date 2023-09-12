/* // Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyDu2o_xS220g0lNqviIfi_QCucocBjlbnc',
  authDomain: 'angularfire-462f8.firebaseapp.com',
  projectId: 'angularfire-462f8',
  storageBucket: 'angularfire-462f8.appspot.com',
  messagingSenderId: '887283735920',
  appId: '1:887283735920:web:5773f3c2a8fdf7f51a43b5',
  measurementId: 'G-LPFQMXKR6L',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app); */

export const environment = {
  production: false,
  firebase: {
    apiKey: 'AIzaSyDu2o_xS220g0lNqviIfi_QCucocBjlbnc',
    authDomain: 'angularfire-462f8.firebaseapp.com',

    // databaseURL: '<your-database-URL>',

    projectId: 'angularfire-462f8',
    storageBucket: 'angularfire-462f8.appspot.com',
    messagingSenderId: '887283735920',
  },
};
