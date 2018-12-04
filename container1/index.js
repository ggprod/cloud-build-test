
const { Client } = require('pg')

setTimeout(() => {
  const client = new Client()
  client.connect().then(res => {
    console.log('Connected!')
  }, err => {
    console.error('Could not connect, error: ' + JSON.stringify(err))
  })
}, 25000)

