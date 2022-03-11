var bgcColors = ['blue', 'green', 'yellow', 'grey', 'pink'];
var $body = document.querySelector('body');
var $leftArrow = document.querySelector('.arrows-left');
var $rightArrow = document.querySelector('.arrows-right');
var $allImgs = document.querySelectorAll('img');
var $solidCircle = document.querySelectorAll('.closed-c');
var $openCircle = document.querySelectorAll('.open-c');
var carasouelCount = 0;

function handleArrowClick(event) {
  var randomIndex = Math.floor(Math.random() * 6);
  $body.className = bgcColors[randomIndex];
  if (event.target === $leftArrow) {
    --carasouelCount;
  }

  if (event.target === $rightArrow) {
    ++carasouelCount;
  }

  if (carasouelCount < 0) {
    carasouelCount = 4;
  }
  if (carasouelCount > 4) {
    carasouelCount = 0;
  }
  clearInterval(intervalID);
  intervalID = setInterval(carasouel, 3000);
  handleImgView();
}

function handleImgView() {
  for (var i = 0; i < $allImgs.length; i++) {
    if ($allImgs[i] === $allImgs[carasouelCount]) {
      $allImgs[i].classList.remove('hidden');
      $solidCircle[i].classList.remove('hidden');
      $openCircle[i].classList.add('hidden');
    } else {
      $allImgs[i].classList.add('hidden');
      $solidCircle[i].classList.add('hidden');
      $openCircle[i].classList.remove('hidden');
    }
  }
}

$leftArrow.addEventListener('click', handleArrowClick);
$rightArrow.addEventListener('click', handleArrowClick);

/* Dot Click Event Listener */
var $dotRow = document.querySelector('.dots');
function viewCircle(event) {
  var randomIndex = Math.floor(Math.random() * 6);
  $body.className = bgcColors[randomIndex];
  clearInterval(intervalID);
  intervalID = setInterval(carasouel, 3000);
  for (var i = 0; i < $openCircle.length; i++) {
    if (event.target === $openCircle[i]) {
      carasouelCount = i;
      $allImgs[i].classList.remove('hidden');
      $openCircle[i].classList.add('hidden');
      $solidCircle[i].classList.remove('hidden');
    } else {
      $allImgs[i].classList.add('hidden');
      $openCircle[i].classList.remove('hidden');
      $solidCircle[i].classList.add('hidden');
    }
  }
  if (carasouelCount === 4) {
    carasouelCount = 0;
    carasouelCount--;
  }
}

$dotRow.addEventListener('click', viewCircle);

function carasouel() {
  var randomIndex = Math.floor(Math.random() * 6);
  $body.className = bgcColors[randomIndex];
  carasouelCount++;
  handleImgView();
  if (carasouelCount === 4) {
    carasouelCount = 0;
    carasouelCount--;
  }
}

var intervalID = setInterval(carasouel, 3000);
