
const request = require('request')

let startTime = new Date()
request({ url: 'http://localhost:8081/hello', method: 'GET' }, (err, res, body) => {
  console.log('Received error: ' + err)
  console.log('Received response: ' + res)
  console.log('Received, body: ' + body)  
})

