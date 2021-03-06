// Require Node.js https module
const https = require('https');
console.log('I did it!');

// Create options Object
// options syntax: https://nodejs.org/api/http.html#http_http_request_options_callback
const options = {
  host: 'stream-large-file.herokuapp.com',
  path: '/give-me-stuff-now'
};

// Callback function, called by https when the request is made.
const callback = function(response){
  console.log('In response handler callback!');
  
  // response.setEncoding('UTF8');
  
  // The response parameter is a stream (object)! 
  // Create a readStream event handler
  // Data: an event that's fired when there is data available to read
  response.on('data', function(chunk){
    console.log(`-- CHUNK OF LENGTH ${chunk.length} --`);
    
    // chunk.toString() uses the encoding of UTF8
    /* 
      You can also specify the encoding 
      by writing response.setEncoding('UTF8) outside response.on().
      That way, you can just log chunk not chunk.toString()
    */
    console.log(chunk.toString());
  });
};

console.log("I'm about to make the request!");

https.request(options, callback).end();

console.log("I've made the request!");