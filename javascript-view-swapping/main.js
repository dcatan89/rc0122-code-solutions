var $tabContainer = document.querySelector('.tab-container');
var $tab = document.querySelectorAll('.tab');
var $view = document.querySelectorAll('.view');

function viewSwap(event) {
  if (event.target.matches('.tab')) {
    for (var i = 0; i < $tab.length; i++) {
      if ($tab[i] === event.target) {
        $tab[i].classList.add('active');
      } else $tab[i].classList.remove('active');
    }
    var $dataView = event.target.getAttribute('data-view');

    for (var j = 0; j < $view.length; j++) {
      if ($dataView === $view[j].getAttribute('data-view')) {
        $view[j].classList.remove('hidden');
      } else {
        $view[j].classList.add('hidden');
      }
    }
  }
}

$tabContainer.addEventListener('click', viewSwap);
