let currentCount = 3;

const intervalID = setInterval(() => {
  console.log(currentCount);
  currentCount--;
  if (currentCount < 0) {
    console.log('Blast off!');
    clearInterval(intervalID);
  }
}, 2000);
