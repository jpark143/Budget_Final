var firebaseConfig = {
    apiKey: "AIzaSyCz5a0RX_i3LGissCJrt3tDQtdLqGdo4Zg",
    authDomain: "budget-d5244.firebaseapp.com",
    projectId: "budget-d5244",
    storageBucket: "budget-d5244.appspot.com",
    messagingSenderId: "329653372520",
    appId: "1:329653372520:web:50e176f336f3329efd9ddd",
    measurementId: "G-VFBS3SNMRS"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const auth = firebase.auth();

function signUp(){
    var email = document.getElementById("email");
    var password = document.getElementById("password");
    const promise = auth.createUserWithEmailAndPassword(email.value, password.value);
    promise.catch(e => alert(e.message));
    alert("You Signed Up successfully! Click login at the bottom and log in!");
}