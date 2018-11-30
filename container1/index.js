
const { Client } = require('pg')
const client = new Client()

setTimeout(() => {
  client.connect().then(res => {
    console.log('Connected!')
  }, err => {
    console.error('Could not connect, error: ' + JSON.stringify(err))
  })
}, 20000)

