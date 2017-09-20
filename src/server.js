const http = require('http');
const url = require('url');
const query = require('querystring');
const htmlHandler = require('./htmlResponses.js');
const otherHandler = require('./otherResponses.js');


const port = process.env.PORT || process.env.NODE_PORT || 3000;

const urlStruct = {
  '/style.css': htmlHandler.getCSS,
  '/': htmlHandler.getIndex,
  '/success': otherHandler.success,
  '/badRequest': otherHandler.badRequest,
  '/unauthorized': otherHandler.unauthorized,
  '/forbidden': otherHandler.forbidden,
  '/internal': otherHandler.internal,
  '/notImplemented': otherHandler.notImplemented,
  '/teapot': otherHandler.teapot,
  notFound: otherHandler.notFound,
};

const onRequest = (request, response) => {
  const parsedUrl = url.parse(request.url);
  const params = query.parse(parsedUrl.query);
  const acceptedTypes = request.headers.accept.split(',');
  

  if (urlStruct[parsedUrl.pathname]) {
    urlStruct[parsedUrl.pathname](request, response, params, acceptedTypes);
  } else {
    urlStruct.notFound(request, response, params, acceptedTypes);
  }
};

http.createServer(onRequest).listen(port);

console.log(`Listening on 127.0.0.1:${port}`);
