
import { initializeApp } from 'firebase/app';
import { getDatabase } from "firebase/database";
import { ref, set ,onValue } from "firebase/database";
import express from 'express';


const PORT = process.env.PORT || 3001;

const app = express();


// TODO: Replace with your app's Firebase project configuration
const firebaseConfig = {
    apiKey: "AIzaSyCuAVHkBP56H1nGggt1-DjXlALu4M_qPiY",
    authDomain: "todolistapppawm.firebaseapp.com",
    databaseURL: "https://todolistapppawm-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "todolistapppawm",
    storageBucket: "todolistapppawm.appspot.com",
    messagingSenderId: "849297804624",
    appId: "1:849297804624:web:e022b5481fb776579bf055",
    measurementId: "G-K47X0QTK5X"
  };

const fb = initializeApp(firebaseConfig);




function writeUserData(userId, name, email, imageUrl) {
    const db = getDatabase();
    set(ref(db, 'users/' + userId), {
      username: name,
      email: email,
      profile_picture : imageUrl
    });
  }

writeUserData("1","Marco","marcoquadrinimsp@gmail.com","www.google.com")



  // Get a reference to the database service
const database = ref( getDatabase() );
var  data;
onValue(database,(snapshot) => {
    data = snapshot.child("users/1/username").val();
    console.log(data)
  });
  











app.get("/api", (req, res) => {
    res.json({ 
        nome: data,
        email : "quadrini"
    });
});

app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
});