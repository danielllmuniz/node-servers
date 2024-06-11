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
const {randomUUID} = require('crypto')

const wss = new WebSocket.Server({ port })

wss.on('connection', (ws) => {
  ws.id = randomUUID()
  console.log(`New client connected on ${ws.id}`)
  ws.on('message', (message) => {
    console.log(`Received: ${message}`)

    
    wss.clients.forEach(client => {
      if (client !== ws && client.readyState === WebSocket.OPEN) {
        client.send(message)
      }
    })
  })

  ws.on('close', () => {
    console.log('Client has disconnected')
  })
})

console.log("ws running on 8080")