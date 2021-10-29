import Ws from 'App/Services/Ws'
Ws.boot()

/**
 * Listen for incoming socket connections
 */
Ws.io.on('connection', (socket) => {
    console.log("Hello Socket")


  socket.on('disconnect', ()=>{
    console.log("Disconnect")
  })


  socket.emit('ev', { hello: 'world' })
  socket.emit('getMessage', { hello: 'world' })

  socket.on('ev', (data) => {
    console.log(data)
  })

  socket.on('message', (data) => {
    console.log(data)
  })
  


})

