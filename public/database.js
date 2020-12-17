
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

  function addData(){
      firebase.database().ref("Budget_Info").set({
          totalBudgetmonth: document.getElementById("monthArea").value,
          totalAmountBudg: document.getElementById("addBudget").value * 1
      })
  }