const express = require('express');

const app = express();

const getDate = require('./util').getDate;

app.set('view engine', 'pug');

app.use(express.static('public'))

app.get('/', (_, res) => {
  res.render('home', { diff: getDate() });
});

app.get('/api', (_, res) => {
  res.json({ days: getDate() });
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});