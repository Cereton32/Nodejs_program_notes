// // const fs=require('fs')
// // const http = require('http')
// // const { type } = require('os')
// // const webpage=fs.readFileSync('./Templates/index.html','utf-8')
// // http.createServer((request,response)=>{
// //   //response.writeHead(400, {'type':"text"})
// //   response.end(webpage)
// //   console.log("a request comes")
// //  // console.log(response) ˇ
// //  //console.log(request) //gives inf0rmation about request

// // }).listen(8080,('127.0.0.1'),()=>{console.log("server started")})




// //**************************** */
// //creating routers for server

// const fs=require('fs')
// const http = require('http')
// const { type } = require('os')
// const webpage=fs.readFileSync('./Templates/index.html','utf-8')
// let jsonfile = fs.readFileSync('./resource/product.json','utf-8')
// const parsedJson=JSON.parse(jsonfile)

// http.createServer((request,response)=>{
//   //response.writeHead(400, {'type':"text"})
//   const path=request.url;
//   if(path==='/' || path.toLocaleLowerCase()==='/home') 
//   {
//     response.end(webpage.replace('{{%CONTEN%}}','this is home page')) 
// }
//   else if(path.toLocaleLowerCase()==='/about') 
//   {
//     response.end(webpage.replace('{{%CONTEN%}}','this is About page'))
//   }
   
//    else if(path.toLocaleLowerCase()==='/contact'){
//     response.end(webpage.replace('{{%CONTENT%}}','this is Contact page'))
//    }
//    //adding an json file
//    else if(path.toLocaleLowerCase()==='/products') {
//     fs.readFile(parsedJson,'utf-8',(err,data)=>{
//      response.writeHead('200',{'Content-Type':'application/json'})
     
//      response.end(obj)
//     })
//    }
//    else 

//    { response.writeHead(404);
//     response.end("404:page not found")

//   }
//  // console.log(response) ˇ
//  //console.log(request) //gives inf0rmation about request

// }).listen(8080,('127.0.0.1'),()=>{console.log("server started")})


