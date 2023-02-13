const fs = require('fs');
const http = require('http');

const port = process.env.PORT || process.env.NODE_PORT || 3000;

const htmlHandler = require('./htmlResponses.js');

const index = fs.readFileSync(`${__dirname}/../client/client.html`);
const styles = fs.readFileSync(`${__dirname}/../client/style.css`);

const html = 'text/html';
const css = 'text/css';

const onRequest = (request, response) => {
  switch (request.url) {
    case '/':
      htmlHandler.loadPage(request, response, index, html, 200);
      break;
    case '/style.css':
      htmlHandler.loadPage(request, response, styles, css, 200);
      break;
    case '/success':
      htmlHandler.loadPage(request, response, index, html, 200);
      break;
    case '/badRequest':
      htmlHandler.loadPage(request, response, index, html, 400);
      break;
    case '/badRequest?valid=true':
      htmlHandler.loadPage(request, response, index, html, 200);
      break;
    case '/unauthorized':
      htmlHandler.loadPage(request, response, index, html, 401);
      break;
    case '/unauthorized?loggedIn=yes':
      htmlHandler.loadPage(request, response, index, html, 200);
      break;
    case '/forbidden':
      htmlHandler.loadPage(request, response, index, html, 403);
      break;
    case '/internal':
      htmlHandler.loadPage(request, response, index, html, 500);
      break;
    case '/notImplemented':
      htmlHandler.loadPage(request, response, index, html, 501);
      break;
    default:
      htmlHandler.loadPage(request, response, index, html, 404);
      break;
  }
};

http.createServer(onRequest).listen(port, () => {

});
