const http = require('http')
 const server = http.createServer();
 const fs=require('fs');





//  fs.readFile('large.txt','utf-8',(err,data)=>{  //this is occcupy verylarge memory in system 
//     try{
//         response.end(data)
//     }
//     catch(err){
//         response.end(err)
//     }
//    })

 server.listen(8080,()=>{
    console.log("server started")
 })
 server.on('request',(request,response)=>{
   let rs=fs.createReadStream('large.txt');
   rs.on('data',(chunk)=>{
     response.write(chunk)
     
   })
   rs.on('end',()=>{
    response.end()
   })
   rs.on('error',(err)=>{
    response.end(err.message) //err.massage = only apllicable on this as this will retrun console error in main
   })

 })