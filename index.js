require("dotenv").config()
const express = require("express")
const massive = require("massive")
const app = express()
const ctrl = require('./products_controller')
const { SERVER_PORT, CONNECTION_STRING } = process.env

app.use(express.json())

app.get('/api/products', ctrl.getAll)
app.get('/api/products/:id', ctrl.getOne)
app.post('/api/products', ctrl.create)
app.put('/api/products/:id', ctrl.update)
app.delete('/api/products/:id', ctrl.delete)

massive(CONNECTION_STRING).then(databaseConnection => {
  app.set('db', databaseConnection)
  console.log('Database Connected')
  app.listen(SERVER_PORT, () => console.log(`Self destruct in ${SERVER_PORT}`))
})
.catch(err => console.log(err))
