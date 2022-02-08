var $spanList = document.querySelectorAll('span');

function typingTutor(event) {
  for (var i = 0; i < $spanList.length; i++) {
    if (event.key !== $spanList[i].textContent) {
      $spanList[i].className = 'wrong';
    }
    if (event.key === $spanList[i].textContent) {
      if ($spanList[i].textContent === '&ThinSpace;') {
        i++;
      }
      $spanList[i].classList.add('correct');
      $spanList[i + 1].className = 'current-letter';
    }
  }
}

document.addEventListener('keydown', typingTutor);
