const fs = require('fs');
const file = process.argv;

const cat = () => {
  let all = '';
  for (let i = 2; i < file.length; i++) {
    fs.readFile(file[i], 'utf-8', (err, data) => {
      if (err) throw err;
      all += data;
    });
  }
  console.log(all);
};

cat();
