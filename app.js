const express = require('express');

const app = express();

const getDate = require('./util').getDate;

app.set('view engine', 'pug');

app.use(express.static('public'))

const DATA = [
  { date: 'April 12, 2023', days: getDate(2023, 4, 12),  text: 'Jersey City promised safety improvements on St. Pauls Avenue.'                            },
  { date: 'Jun. 11, 2021',  days: getDate(2021, 6, 11),  text: 'a vehicle struck a pedestrian on St. Pauls Avenue triggering more calls for safety.'      },
  { date: 'Sept. 17, 2020', days: getDate(2020, 9, 17),  text: 'Jersey City conducted a walking audit to experience the problems on St. Pauls Avenue'     },
  { date: 'Nov. 19, 2011',  days: getDate(2011, 11, 19), text: 'a grandmother was killed on St. Pauls Avenue while picking up her grandchild from PS 31.' },
  // { date: 'Jul. 12, 2011',  days: getDate(2011, 7, 12),  text: 'a pedestrian was impaled on the fence at PS 31 after being struck by a vehicle.'          }
];

app.get('/', (_, res) => {
  const events = DATA.sort((a, b) => a.days - b.days);
  res.render('home', { events });
});

app.get('/api', (_, res) => {
  res.json({ days: getDate() });
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});