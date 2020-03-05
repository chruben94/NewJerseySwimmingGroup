import firebase from 'firebase';

var firebaseConfig = {
    apiKey: "AIzaSyAX4XCZMm3iySKKqXShOKK-E3NmmIDFgDs",
    authDomain: "final-project-4a9bc.firebaseapp.com",
    databaseURL: "https://final-project-4a9bc.firebaseio.com",
    projectId: "final-project-4a9bc",
    storageBucket: "final-project-4a9bc.appspot.com",
    messagingSenderId: "550530260934",
    appId: "1:550530260934:web:fb9756adcecee875dbdcc7"
  };

  const fire = firebase.initializeApp(firebaseConfig);

export default fire;