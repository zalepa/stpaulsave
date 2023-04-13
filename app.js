const express = require('express');

const app = express();

function getDate() {
  const pastDate = new Date(2023, 3, 12);
  console.log(pastDate)
  const currentDate = new Date();
  console.log(currentDate)
  const differenceInMs = currentDate.getTime() - pastDate.getTime();

  const differenceInDays = differenceInMs / 86400000;

  return Math.floor(differenceInDays);
}

app.set('view engine', 'pug');

app.get('/', (_, res) => {
  const diff = getDate();
  console.log('hello')
  res.render('pages/home', { diff });
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});