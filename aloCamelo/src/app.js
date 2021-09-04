const express = require('express')
const cors = require('cors')
const app = express()

//require('dotenv-safe').config()

const database = require('../src/data/database')
database.connect()

app.use(express.json())
app.use(cors())

const cameloAdministradorRouter = require('./routes/cameloAdministradorRoutes')
app.use('/administrador', cameloAdministradorRouter)



const locais = require('./routes/cameloLocaisRoutes')
app.use('/local', locais)


//Swagger config

//const swaggerUi = require('swagger-ui-express'),
//swaggerDocument = require('./swagger.json');


/* app.use(
  '/api-docs',
  swaggerUi.serve, 
  swaggerUi.setup(swaggerDocument)
); */

/* app.listen(8001, () => {
  console.log("server listening on port 8001");
}); */


module.exports = app
