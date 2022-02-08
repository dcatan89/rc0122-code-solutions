var $spanList = document.querySelectorAll('span');
var i = 0;

function typingTutor(event) {
  if ($spanList[i].className === 'space current-letter') {
    $spanList[i].className = 'space';
    i++;
  }
  if (event.key !== $spanList[i].textContent) {
    $spanList[i].classList.add('wrong');
    return i;
  }
  if (event.key === $spanList[i].textContent) {
    $spanList[i].className = 'correct';
    $spanList[i + 1].classList.add('current-letter');
    i++;
  }
}
document.addEventListener('keydown', typingTutor);
