const loadPage = (request, response, page, contentType, statusCode) => {
  response.writeHead(statusCode, { 'Content-Type': `${contentType}` });
  response.write(page);
  response.end();
};

module.exports.loadPage = loadPage;
