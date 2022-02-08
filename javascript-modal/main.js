var $modalButton = document.querySelector('.modal');
var $noButton = document.querySelector('.no-button');
var $overlay = document.querySelector('.overlay');

function openModal(event) {
  $overlay.classList.remove('hidden');
}

function closeModal(event) {
  $overlay.classList.add('hidden');
}

$modalButton.addEventListener('click', openModal);
$noButton.addEventListener('click', closeModal);
