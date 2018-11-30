const express = require('express')
const app = express()

app.get('/hello', (req, res) => {
  res.send('Hello from container2!')
})

app.listen(8081, () => console.log('container2 listening on port 8081!'))