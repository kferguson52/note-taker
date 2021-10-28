const express = require("express");
const frontend = require('./routes/frontend');
const backend = require('./routes/backend')

const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));
app.use('/api', backend);
app.use('/', frontend)


app.listen(PORT, () => {
  console.log(`API server now on port ${PORT}!`);
});
