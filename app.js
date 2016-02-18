var http = require('http');
var request = require('request');
var port = 1337;

var urlToShorten = process.argv[2];
var server = http.createServer(requestHandler);
var key = "AIzaSyARJMp3s0j5xnBqgoofZYSUwu-7yx_7whE"
var url = "https://www.googleapis.com/urlshortener/v1/url?key=" + key;
// var payload = {"longUrl": urlToShorten}

server.listen(port, function(){
  console.log("Server is running on", port);
})

var options = { method: 'POST',
  url: url,

  headers:
   {
     'content-type': 'application/json' },
  body: {longUrl: urlToShorten },
  json: true };

function requestHandler (req, res) {
  request.post(options, function (error, response) {
   if (error) {
    throw new Error(error)
    } else {

    res.end(JSON.stringify(response.body));
    }

});
}



// curl https://www.googleapis.com/urlshortener/v1/url1
//   -H 'Content-Type: application/json' \
//   -d '{"longUrl": "http://www.google.com/"}'

//   AIzaSyARJMp3s0j5xnBqgoofZYSUwu-7yx_7whE