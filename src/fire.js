import firebase from 'firebase'
  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
    apiKey: "AIzaSyCRcH6GohvfhXf-4PL2ybBIePNefy7ihcE",
    authDomain: "bitcoin-project-87f3e.firebaseapp.com",
    databaseURL: "https://bitcoin-project-87f3e-default-rtdb.firebaseio.com",
    projectId: "bitcoin-project-87f3e",
    storageBucket: "bitcoin-project-87f3e.appspot.com",
    messagingSenderId: "172839924542",
    appId: "1:172839924542:web:3ed647c272cc8ace47726f",
    measurementId: "G-MQ160QCL73"
  };
  // Initialize Firebase
  const fire = firebase.initializeApp(firebaseConfig);
  firebase.analytics();


  export default fire;