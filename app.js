const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('NodeJs App verion is v1.45 on Kubernetes Cluster');
});

app.listen(3000, () => {
  console.log('Listening on port 3000');
});