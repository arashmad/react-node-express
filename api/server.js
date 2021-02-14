// -----------------------------
// developed by ARASH
// It's just a boilerplate version
// Nodejs / Expressjs / React.js
//------------------------------


const express = require('express');
const cors = require('cors');

const testRoute = require('./routes/test.route');

const app = express();
const port = process.env.PORT || 3001;

app.use(cors());

app.use(express.json());
app.use('/', testRoute);

app.use((req, res) => {
  res.status(404).send('Page not found!');
})

app.listen(port, () => {
  console.log('\n\n----------------------------------------------')
  console.log('----------------------------------------------')
  console.log(` Node/Express Server Running on port <<${port}>>`);
  console.log('----------------------------------------------')
  console.log('----------------------------------------------\n\n')
})