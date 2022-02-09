var $form = document.querySelector('form');

function handleSubmit(event) {
  event.preventDefault();
  var $nameValue = $form.elements.name.value;
  var $emailValue = $form.elements.email.value;
  var $messageValue = $form.elements.message.value;
  var messageData = {
    name: $nameValue,
    email: $emailValue,
    message: $messageValue
  };
  console.log('messageData:', messageData);
  $form.reset();

}

$form.addEventListener('submit', handleSubmit);
