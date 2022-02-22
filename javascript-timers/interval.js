var $countdown = document.querySelector('.countdown-display');
var count = 4;
function countdown() {
  $countdown.textContent = count;
  if (count === 0) {
    $countdown.textContent = '~Earth Beeeloooww Us ~';
    clearInterval(intervalID);
  }
  count--;
}

var intervalID = setInterval(countdown, 1000);
