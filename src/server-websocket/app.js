// const WebSocket = require('ws')

// const wss = new WebSocket.Server({ port: 8080 });

// wss.on('connection', function connection(ws) {
//   console.log('A new client connected.')

//   ws.on('message', function incoming(message) {
//     console.log('received: %s', message);

//     ws.send(`server received: ${message}`)
//   })

//   ws.send('Welcome to the WebSocket server!')
// })

// console.log('WebSocket server is running on ws://localhost:8080')

const WebSocket = require('ws')
const port = 8080

const wss = new WebSocket.Server({ port })

wss.on('connection', (ws) => {
  ws.on('message', (message) => {
    console.log(`${message}`)
    ws.send('received')
  })
})

console.log("ws running on 8080")