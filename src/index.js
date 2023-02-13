/* window.onload = requestUpdate;

const requestUpdate = async () => {
  const url = document.querySelector('#page').value;
  const type = document.querySelector('#type').value;

  const response = await fetch(url, {
    method: 'GET',
    headers: {
      Accept: type,
    },
  });

  handleResponse(response);
};

const handleResponse = async (request, response) => {
  const content = document.querySelector('#content');

  switch (response.status) {
    case 200:
      content.innerHTML = '<b>Success!</b>';
      break;
    case 400:
      content.innerHTML = '<b>Bad Request!</b>';
      break;
    case 401:
      content.innerHTML = '<b>Unauthorized!</b>';
      break;
    case 403:
      content.innerHTML = '<b>Forbidden!</b>';
      break;
    case 404:
      content.innerHTML = '<b>Page not found!</b>';
      break;
    case 500:
      content.innerHTML = '<b>Internal error!</b>';
      break;
    case 501:
      content.innerHTML = '<b>Not implemented!</b>';
      break;
    default:
      content.innerHTML = '<b>Error not found!</b>';
      break;
  }

  const obj = await response.json();

  const objString = JSON.stringify(obj);
  content.innerHTML += '<p>objString</p>';
}; */
