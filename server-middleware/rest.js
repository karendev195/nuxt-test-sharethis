const bodyParser = require('body-parser');
const app = require('express')();
const { v4 } = require('uuid');
const sessionstorage = require('sessionstorage');

app.use(bodyParser.json())
app.get('/sharers', (req, res) => {
  const sharers = sessionstorage.getItem('sharers') || [];

  console.log("reqid", sharers.filter(s => s.id === req.query.id));

  res.json({ data: req.query.id && req.query.id.length ? sharers.filter(s => s.id === req.query.id) : sharers});
})
app.post('/sharers', (req, res) => {
  const sharers = sessionstorage.getItem('sharers') || [];

  const id = v4();
  sharers.push({
    id: id,
    text: req.body.text
  });

  sessionstorage.setItem('sharers', sharers);

  res.json({ id: id });
})

export default {
  path: '/api',
  handler: app
}