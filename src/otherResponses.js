const respond = (request, response, status, content, type) => {
  response.writeHead(status, {
    'Content-Type': type,
  });
  response.write(content);
  response.end();
};

const success = (request, response, params, acceptedTypes) => {
  const answer = {
    message: 'This is a successful response',
    id: 'success',
  };

  if (acceptedTypes[0] === 'text/xml') {
    let responseXML = '<response>';
    responseXML = `${responseXML} <message>${answer.message}</message>`;
    responseXML = `${responseXML} <id>${answer.id}</id>`;
    responseXML = `${responseXML} </response>`;
    console.dir(responseXML);
    return respond(request, response, 200, responseXML, 'text/xml');
  }

  const answerString = JSON.stringify(answer);
  console.dir(answerString);
  return respond(request, response, 200, answerString, 'application/json');
};

const badRequest = (request, response, params, acceptedTypes) => {
  const answer = {
    message: 'This request has the required parameters',
  };
  if (!params.valid || params.valid !== 'true') {
    answer.message = 'Missing valid query parameter set to true';
    answer.id = 'badRequest';
  }

  if (acceptedTypes[0] === 'text/xml') {
    let responseXML = '<response>';
    responseXML = `${responseXML} <message>${answer.message}</message>`;
    responseXML = `${responseXML} <id>${answer.id}</id>`;
    responseXML = `${responseXML} </response>`;
    console.dir(responseXML);
    return respond(request, response, 400, responseXML, 'text/xml');
  }

  const answerString = JSON.stringify(answer);
  console.dir(answerString);

  return respond(request, response, 400, answerString, 'application/json');
};

const unauthorized = (request, response, params, acceptedTypes) => {
  const answer = {
    message: 'You have successfully viewed the content.',
  };
  if (!params.loggedIn || params.loggedIn !== 'true') {
    answer.message = 'Missing loggedIn query parameter set to true';
    answer.id = 'unauthorized';
  }
  if (acceptedTypes[0] === 'text/xml') {
    let responseXML = '<response>';
    responseXML = `${responseXML} <message>${answer.message}</message>`;
    responseXML = `${responseXML} <id>${answer.id}</id>`;
    responseXML = `${responseXML} </response>`;
    console.dir(responseXML);
    return respond(request, response, 401, responseXML, 'text/xml');
  }

  const answerString = JSON.stringify(answer);
  console.dir(answerString);

  return respond(request, response, 401, answerString, 'application/json');
};

const forbidden = (request, response, params, acceptedTypes) => {
  const answer = {
    message: 'You do not have access to this content.',
    id: 'forbidden',
  };

  if (acceptedTypes[0] === 'text/xml') {
    let responseXML = '<response>';
    responseXML = `${responseXML} <message>${answer.message}</message>`;
    responseXML = `${responseXML} <id>${answer.id}</id>`;
    responseXML = `${responseXML} </response>`;
    console.dir(responseXML);
    return respond(request, response, 403, responseXML, 'text/xml');
  }

  const answerString = JSON.stringify(answer);
  console.dir(answerString);

  return respond(request, response, 403, answerString, 'application/json');
};

const internal = (request, response, params,acceptedTypes) => {
  const answer = {
    message: 'Internal Server Error. Something went wrong.',
    id: 'internalError',
  };
  if (acceptedTypes[0] === 'text/xml') {
    let responseXML = '<response>';
    responseXML = `${responseXML} <message>${answer.message}</message>`;
    responseXML = `${responseXML} <id>${answer.id}</id>`;
    responseXML = `${responseXML} </response>`;
    console.dir(responseXML);
    return respond(request, response, 500, responseXML, 'text/xml');
  }

  const answerString = JSON.stringify(answer);
  console.dir(answerString);

  return respond(request, response, 500, answerString, 'application/json');
};

const notImplemented = (request, response, params,acceptedTypes) => {
  const answer = {
    message: 'A request for this page has not been implemented yet. Check again later for updated content.',
    id: 'notImplemented',
  };
  if (acceptedTypes[0] === 'text/xml') {
    let responseXML = '<response>';
    responseXML = `${responseXML} <message>${answer.message}</message>`;
    responseXML = `${responseXML} <id>${answer.id}</id>`;
    responseXML = `${responseXML} </response>`;
    console.dir(responseXML);
    return respond(request, response, 501, responseXML, 'text/xml');
  }

  const answerString = JSON.stringify(answer);
  console.dir(answerString);

  return respond(request, response, 501, answerString, 'application/json');
};

const teapot = (request, response, params,acceptedTypes) => {
  const answer = {
    message: "I'm a little teapot, short and stout. Here is my handle here is my spout.",
    id: 'teapot',
  };
  if (acceptedTypes[0] === 'text/xml') {
    let responseXML = '<response>';
    responseXML = `${responseXML} <message>${answer.message}</message>`;
    responseXML = `${responseXML} <id>${answer.id}</id>`;
    responseXML = `${responseXML} </response>`;
    console.dir(responseXML);
    return respond(request, response, 418, responseXML, 'text/xml');
  }

  const answerString = JSON.stringify(answer);
  console.dir(answerString);

  return respond(request, response, 418, answerString, 'application/json');
};

const notFound = (request, response, params, acceptedTypes) => {
  const answer = {
    message: 'The page you are looking for was not found.',
    id: 'notFound',
  };
  if (acceptedTypes[0] === 'text/xml') {
    let responseXML = '<response>';
    responseXML = `${responseXML} <message>${answer.message}</message>`;
    responseXML = `${responseXML} <id>${answer.id}</id>`;
    responseXML = `${responseXML} </response>`;
    console.dir(responseXML);
    return respond(request, response, 404, responseXML, 'text/xml');
  }

  const answerString = JSON.stringify(answer);
  console.dir(answerString);

  return respond(request, response, 404, answerString, 'application/json');
};

module.exports = {
  success,
  badRequest,
  unauthorized,
  forbidden,
  internal,
  notImplemented,
  teapot,
  notFound,
};
