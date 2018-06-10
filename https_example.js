// Require Node.js https module
const https = require('https');
console.log('I did it!');

// Create options Object
// options syntax: https://nodejs.org/api/http.html#http_http_request_options_callback
const options = {
  host: 'www.example.org',
  path: '/'
};

// Callback function, called by https when the request is made.
const callback = function(){
  console.log('In response handler callback!');
};

console.log("I'm about to make the request!");

https.request(options, callback).end();

console.log("I've made the request!");