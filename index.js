const path = require('path');
const express = require('express');
const app = express();

const routes = require('./server/config/routes.js');

app.use(express.static(path.resolve(__dirname, './app')));

app.use(routes);

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Running server on PORT ${PORT}`);
});
