var $leftArrow = document.querySelector('.arrows-left');
var $rightArrow = document.querySelector('.arrows-right');
var $allImgs = document.querySelectorAll('img');
var carasouelCount = 0;

function handleArrowClick(event) {
  if (event.target === $leftArrow) {
    --carasouelCount;
  }

  if (event.target === $rightArrow) {
    ++carasouelCount;
  }

  if (carasouelCount < 0) {
    carasouelCount = 4;
  } else if (carasouelCount > 4) {
    carasouelCount = 0;
  }

  handleImgView();

}

function handleImgView() {
  for (var i = 0; i < $allImgs.length; i++) {
    if ($allImgs[i] === $allImgs[carasouelCount]) {
      $allImgs[i].classList.remove('hidden');
    } else {
      $allImgs[i].classList.add('hidden');
    }
  }
}

$leftArrow.addEventListener('click', handleArrowClick);
$rightArrow.addEventListener('click', handleArrowClick);
