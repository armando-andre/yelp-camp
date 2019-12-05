export default async function firebaseConfig() {
  const firebase = await import('firebase/app');
                   await import('firebase/firestore');

  const firebaseConfig = {
    apiKey: "AIzaSyAbMkukc2hYN3r6LyLKYMkQBX10WnIOuKs",
    authDomain: "yelpcamp-b1cbf.firebaseapp.com",
    databaseURL: "https://yelpcamp-b1cbf.firebaseio.com",
    projectId: "yelpcamp-b1cbf",
    storageBucket: "yelpcamp-b1cbf.appspot.com",
    messagingSenderId: "452447157516",
    appId: "1:452447157516:web:169abc8a2a7943437b1d29",
    measurementId: "G-ZKHQF21J3C"
  };

  try {
    firebase.initializeApp(firebaseConfig);
  } catch (err) {
    if (!/already exists/.test(err.message)) {
      console.error("Firebase initialization error", err.stack);
    }
  }

  const db = firebase.firestore()
  return db;
}