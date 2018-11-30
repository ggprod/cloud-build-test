
const { Client } = require('pg')

setTimeout(() => {
  console.log(process.env.PGHOST)
  console.log(process.env.PGUSER)
  const client = new Client()
  client.connect().then(res => {
    console.log('Connected!')
  }, err => {
    console.error('Could not connect, error: ' + JSON.stringify(err))
  })
}, 30000)

