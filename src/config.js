import Firebase from 'firebase'



let firebaseConfig = {
    apiKey: "AIzaSyD24eosQ8yaioc5RRtNUTjpiDd5Swh8494",
    authDomain: "rnfirebasedemo-77b6d.firebaseapp.com",
    databaseURL: "https://rnfirebasedemo-77b6d.firebaseio.com",
    projectId: "rnfirebasedemo-77b6d",
    storageBucket: "",
    messagingSenderId: "692007978247",
    appId: "1:692007978247:web:a0f7973747d58435"
};
// Initialize Firebase

let app = Firebase.initializeApp(firebaseConfig);

export const db = app.database()
