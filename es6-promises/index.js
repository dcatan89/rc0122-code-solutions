const takeAChance = require('./take-a-chance');
const dj = takeAChance('DJ');

dj.then(resolve => {
  console.log(resolve);
}).catch(reject => {
  console.log(reject.message);
});
