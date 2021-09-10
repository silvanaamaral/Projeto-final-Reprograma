const express = require('express')
const cors = require('cors')
const app = express()
const index = require("./routes/index");
const adminRouter = require('./routes/adminRoutes');
const locais = require('./routes/locaisRoutes')

 /* app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Request-With, Content-Type, Accept"
  );
  next();
});  */

const database = require('../src/data/database')
database.connect()

app.use(express.json())
app.use(cors())
app.use('/', index);
app.use('/administrador', adminRouter)
app.use('/local', locais)



module.exports = app
