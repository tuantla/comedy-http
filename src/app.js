import express from 'express'

const app = express()
app.get('/', (req, res) => {
  app.counter = app.counter + 1
  app.storage.sendAndReceive('store', `#${app.counter}`).then(msg=> console.log(msg))



  res.send(`hello world ${app.counter}`)
})

module.exports = app;
