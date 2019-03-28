import * as firebase from 'firebase';

var config = {
    apiKey: "AIzaSyBGg8OYKpEOC64V22jDoXjpZ2zziyr1NvY",
    authDomain: "burgerqueen-9085c.firebaseapp.com",
    databaseURL: "https://burgerqueen-9085c.firebaseio.com",
    projectId: "burgerqueen-9085c",
    storageBucket: "burgerqueen-9085c.appspot.com",
    messagingSenderId: "524965969115"
  };
  firebase.initializeApp(config);

export const database=firebase.database();