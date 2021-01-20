import express = require('express');
import path = require('path');

const app = express();
app.use(express.static(path.resolve(__dirname, '../client/public')));

const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.status(200);
});

app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`App is listening on ${PORT}`);
});
