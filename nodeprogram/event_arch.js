const http = require('http')
const events = require('events')

// const myserver = http.createServer();
// myserver.on('request',(request,response)=>{
//    response.end('<h1>This is based on On function</h1>')
// })
// myserver.emit('req')
// myserver.listen(8081)

let customEVET = new events.EventEmitter()
 customEVET.on('create',(name,id)=>{
     console.log(`User created : ${name}  age : ${id}`);
 })
 customEVET.emit("create",'abhishek',23)
