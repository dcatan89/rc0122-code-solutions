const express = require('express');
const app = express();
const path = require('path');
const joinedPath = path.join(__dirname, 'public');
app.use(express.static(joinedPath));

app.listen(3000, () => {
  console.log('Port 3000 running');
});
