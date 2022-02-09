function handleFocus(event) {
  console.log('focus');
  console.log('event target:', event.target);
}

function handleBlur(event) {
  console.log('blur');
  console.log('event target', event.target);
}

function handleInput(event) {
  console.log('event.target name:', event.target.name);
  console.log('event.target value:', event.target.value);
}

var $name = document.querySelector('#user-name');
var $email = document.querySelector('#user-email');
var $message = document.querySelector('#user-message');

$name.addEventListener('focus', handleFocus);
$email.addEventListener('focus', handleFocus);
$message.addEventListener('focus', handleFocus);
$name.addEventListener('blur', handleBlur);
$email.addEventListener('blur', handleBlur);
$message.addEventListener('blur', handleBlur);
$name.addEventListener('input', handleInput);
$email.addEventListener('input', handleInput);
$message.addEventListener('input', handleInput);
