const functions = require('firebase-functions');
const emojis = require('node-emojis');

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
exports.emojis = functions.https.onRequest((request, response) => {
  response.send(emojis);
});
