const firebase = require("firebase");
// Initialize Cloud Firestore through Firebase
var firebaseConfig = {
    apiKey: process.env.apiKey,
    authDomain: process.env.authDomain,
    databaseURL: process.env.databaseURL,
    projectId: process.env.projectId,
    storageBucket: process.env.storageBucket,
    messagingSenderId: process.env.messagingSenderId,
    appId: process.env.appId
  };

firebase.initializeApp(firebaseConfig);

var db = firebase.firestore();

exports.handler = function(event, context, callback) {
    db.collection("clicks").add({
        time: firebase.firestore.Timestamp.fromDate(Date.now());,
    })
    
    .then(function(docRef) {
        console.log("Document written with ID: ", docRef.id);
        callback(null, {
        statusCode: 200,
        body:  `Document written with ID: ${docRef.id}`
        })
    })
    .catch(function(error) {
    console.error("Error adding document: ", error);
    });

    
}