const express = require('express');
const path = require('path');
const app = express();

function sendHomePage(req, res) {
  res.status(200).sendFile(path.resolve(__dirname, '../../app/index.html'))
}

function notFound(req, res) {
  res.status(404).send('404 NOT FOUND')
}

app.route('/')
  .get(sendHomePage)

app.route('*')
  .get(notFound)

  module.exports = app;
