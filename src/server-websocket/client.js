const WebSocket = require('ws')
const readline = require('readline')

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

const ws = new WebSocket('ws://localhost:8080')

ws.on('open', () => {
  console.log('Connected to the server');

  rl.on('line', line => ws.send(line))
})

ws.on('message', (data) => {
  console.log(`Received: ${data}`);
})

ws.on('close', function close() {
  console.log('Disconnected from the server')
  process.exit(0)
})

ws.on('error', (e) => {
  console.log(`Error: ${e}`)
})