importScripts("https://www.gstatic.com/firebasejs/8.6.1/firebase-app.js");
importScripts("https://www.gstatic.com/firebasejs/8.6.1/firebase-messaging.js");

firebase.initializeApp({
  apiKey: "AIzaSyAR-0l7XyEovSQFTX-OUkNfM5QjZ3HZluA",
  authDomain: "twig-project.firebaseapp.com",
  projectId: "twig-project",
  storageBucket: "twig-project.appspot.com",
  messagingSenderId: "595444389112",
  appId: "1:595444389112:web:0f13c20e58a0e53cfa170d",
  measurementId: "G-XCDX0WFHBH"
});
// Necessary to receive background messages:
let messaging = null;
if (firebase.messaging.isSupported()) {
  messaging = firebase.messaging();
}