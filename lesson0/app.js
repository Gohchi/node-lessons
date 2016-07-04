var http = require('http');

var PORT = process.env.PORT || 8080;
var HOSTNAME = process.env.HOSTNAME || 'localhost';
var NODE_ENV = process.env.NODE_ENV || 'development';
var counter=0;

var icon = '/img/ring.gif'
var server = http.createServer(function(request, response) {
  response.writeHead(200, {'Content-Type': 'text/html'});
  response.write('<!DOCTYPE "html">');
  response.write('<html>');
  response.write('<head>');
  response.write('<link rel="icon" type="image/x-icon" href="' + icon +'" >');
  response.write('<title>Hello Node Page</title>');
  response.write('<link rel="stylesheet" href="style/main.css">');
  response.write('<style>');
  response.write('@keyframes textshadow {0% {box-shadow: 10px 10px;} 30% {box-shadow: 5px 5px;} 100% {box-shadow: 10px 10px;}}');
  response.write('#maintext {display:inline;box-shadow: 10px 10px; padding: 3px; border: 1px solid;}');
  response.write('#maintext:hover {animation-name: textshadow; animation-duration: 1s;}');
  response.write('</style>');
  response.write('</head>');
  response.write('<body>');
  response.write('<span id="maintext">Hello Node.js ' + counter + ' running as ' + NODE_ENV + '!');
  response.write('</span>');
  response.write('</body>');
  response.write('</html>');
  response.end();
  console.log('counter: ' + counter + ' request url: ' + request.url);
  counter++;
});

server.listen(PORT, HOSTNAME);
console.log('Server is listening at:' + HOSTNAME + ':' + PORT);