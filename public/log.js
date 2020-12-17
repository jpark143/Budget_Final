
  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
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

  firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      // User is signed in.
      document.getElementById("user").style.display = "block";
      document.getElementById("login").style.display = "none";
    } else {
      // No user is signed in.
      document.getElementById("user").style.display = "none";
      document.getElementById("login").style.display = "block";
    }
  });

  function logIn(){
      var email = document.getElementById("email");
      var password = document.getElementById("password");
      const promise = auth.signInWithEmailAndPassword(email.value, password.value);
      promise.catch(e => alert(e.message));
      
  }

  function logOut(){
    auth.signOut();
    alert("You are logged out... See you soon!");
  }

  auth.onAuthStateChanged(function(user){
    if(user){
      var email= user.email;
    }
    else{
      
    }
  });

