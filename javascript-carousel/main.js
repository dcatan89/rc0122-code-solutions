var targetUrl = encodeURIComponent('https://api.coinpaprika.com/v1/coins');

var xhr = new XMLHttpRequest();
xhr.open('GET', 'https://lfz-cors.herokuapp.com/?url=' + targetUrl);
xhr.setRequestHeader('token', 'abc123');
xhr.responseType = 'json';
xhr.addEventListener('load', function () {
  console.log(xhr.response);
});
xhr.send();
