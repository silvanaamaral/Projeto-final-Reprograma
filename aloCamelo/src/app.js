const express = require('express')
const cors = require('cors')
const app = express()
const index = require("./routes/index");
const adminRouter = require('./routes/adminRoutes');
const locais = require('./routes/locaisRoutes')

 const database = require('../src/data/database')
database.connect()

app.use(express.json())
app.use(cors())
app.use('/', index);
app.use('/administrador', adminRouter)
app.use('/local', locais)



module.exports = app
