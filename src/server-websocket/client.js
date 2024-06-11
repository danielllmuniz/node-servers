const WebSocket = require('ws')

const ws = new WebSocket('ws://localhost:8080')

ws.on('open', function open() {
  console.log('Connected to the server');

  ws.send('Hello, server!')
})

ws.on('message', function incoming(data) {
  console.log(data.toString());
})

ws.on('close', function close() {
  console.log('Disconnected from the server')
})