const functions = require('firebase-functions');
const emojis = require('node-emojis');

exports.emojis = functions.https.onRequest((request, response) => {
  response.set('Access-Control-Allow-Origin', '*');
  response.send(emojis);
});
