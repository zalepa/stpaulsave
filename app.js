const express = require('express');

const app = express();

const getDate = require('./util').getDate;

app.set('view engine', 'pug');

app.use(express.static('public'))

app.get('/', (_, res) => {
  res.render('home', { 
    council: { date: 'April 12, 2023', days: getDate(2023, 4, 12) },
    pedestrianStruck: {date: 'Jun. 11, 2021', days: getDate(2021, 6, 11) },
    walkingAudit: {date: 'Sept. 17, 2020', days: getDate(2020, 9, 17) },
    grandma: {date: 'Nov. 19, 2011', days: getDate(2011, 11, 19) },
  });
});

app.get('/api', (_, res) => {
  res.json({ days: getDate() });
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});