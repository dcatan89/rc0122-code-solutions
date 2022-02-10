var $taskList = document.querySelector('.task-list');

function handleClick(event) {
  console.log('event target:', event.target);
  console.log('event.target.tagName:', event.target.tagName);
  if (event.target.matches('button')) {
    var parent = event.target.closest('.task-list-item');
    console.log('parent:', parent);
    parent.remove();
  }
}

$taskList.addEventListener('click', handleClick);
