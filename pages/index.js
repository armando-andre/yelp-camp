import React, { useState } from 'react'
import firebase from 'firebase/app';
import 'firebase/firestore';

if (!firebase.apps.length) {
  firebase.initializeApp({
    apiKey: "AIzaSyAbMkukc2hYN3r6LyLKYMkQBX10WnIOuKs",
    authDomain: "yelpcamp-b1cbf.firebaseapp.com",
    databaseURL: "https://yelpcamp-b1cbf.firebaseio.com",
    projectId: "yelpcamp-b1cbf",
    storageBucket: "yelpcamp-b1cbf.appspot.com",
    messagingSenderId: "452447157516",
    appId: "1:452447157516:web:169abc8a2a7943437b1d29",
    measurementId: "G-ZKHQF21J3C"
  });
}

var db = firebase.firestore();

const Home = () => {
  const [nameValue, setNameValue] = useState('');
  const [ratingValue, setRatingValue] = useState('');
  const [temperatureValue, setTemperatureValue] = useState('');
  const [dangersValue, setDangersValue] = useState('');
  const [descriptionValue, setDescriptionValue] = useState('');
  const [activitiesValue, setActivitiesValue] = useState('');
  const [imageValue, setImageValue] = useState('');


  const handleSubmit = (event) => {
    event.preventDefault();

    db.collection('campgrounds').add({
      name: nameValue,
      rating: `${ratingValue} / 5.0`,
      image: imageValue,
      temperature: `${temperatureValue}°`,
      dangers: dangersValue,
      description: descriptionValue,
      activities: activitiesValue
    })
    .then(function() {
      console.log("Document successfully written!");
    })
    .catch(function(error) {
      console.error("Error writing document: ", error);
    });
  }

  return (
    <form onSubmit={handleSubmit}>  
      <label>Name:</label>
      <input type="text" onChange={event => setNameValue(event.target.value)} />
      <br />
      <label>Image URL:</label>
      <input type="text" onChange={event => setImageValue(event.target.value)} />
      <br />
      <label>Rating:</label>
      <input rows="7" cols="50" type="text" onChange={event => setRatingValue(event.target.value)} /><label> / 5.0</label>
      <br />
      <label>Temperature:</label>
      <input type="text" onChange={event => setTemperatureValue(event.target.value)} /><label> °</label>
      <br />
      <label>Dangers:</label>
      <input rows="7" cols="50" type="text" onChange={event => setDangersValue(event.target.value)} />
      <br />
      <label>Description:</label>
      <br />
      <textarea rows="7" cols="50" type="text" onChange={event => setDescriptionValue(event.target.value)} />
      <br />
      <label>Activities:</label>
      <br />
      <textarea rows="7" cols="50" type="text" onChange={event => setActivitiesValue(event.target.value)} />
      <br />
      <input type="submit" value="Submit" />
    </form>
  );
}

export default Home
