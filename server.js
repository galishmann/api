const express = require('express');
const morgan = require('morgan');


const port = 8080;

const data = [
  {
    id: '1',
    title: 'One',
  },
  {
    id: '2',
    title: 'Two',
  },
  {
    id: '3',
    title: 'Three',
  },
];

const app = express();
app.use(morgan('tiny'));

app.get('/api/healthcheck', (req, res) => {
  res.send("ok");
});

app.get('/api/items', (req, res) => {
  res.json(data);
});

app.post('/api/items', (req, res) => {
  const { title } = req.query;
  if (title) {
    data.push({ id: Date.now().toString(), title });
    return res.json(data);
  }

  return res.status(400);
})

app.listen(port, () => {
  console.log(`Server started on ${port}`);
});
