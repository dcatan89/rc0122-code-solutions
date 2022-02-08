var $body = document.querySelector('body');
var $circle = document.querySelector('.column-full');
var lightOn = 'on';

function lightToggle(event) {
  if (lightOn === 'on') {
    $body.className = 'bgc-dark';
    $circle.classList.remove('light-box');
    $circle.classList.add('dark-box');
    lightOn = 'off';
  } else {
    $body.className = 'bgc-light';
    $circle.classList.remove('dark-box');
    $circle.classList.add('light-box');
    lightOn = 'on';
  }
}

$circle.addEventListener('click', lightToggle);
