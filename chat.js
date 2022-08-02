// Your web app's Firebase configuration
//ADD YOUR FIREBASE LINKS HERE
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCU2SM7RMlemsVks7mBabVyFytydmJOidE",
    authDomain: "social-website-kwitter-aa7d6.firebaseapp.com",
    databaseURL: "https://social-website-kwitter-aa7d6-default-rtdb.firebaseio.com",
    projectId: "social-website-kwitter-aa7d6",
    storageBucket: "social-website-kwitter-aa7d6.appspot.com",
    messagingSenderId: "24829314778",
    appId: "1:24829314778:web:cbcb5408fd9e12202607e3",
    measurementId: "G-F19E1EVJQT"
  };
// Initialize Firebase
firebase.initializeApp(firebaseConfig);


function addUser()
{
    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose : "adding user"
    });
    localStorage.setItem("user_name", user_name);
    window.location = "chat_room.html";
}



