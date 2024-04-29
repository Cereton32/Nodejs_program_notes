// try{
//     a=5;
//     b=6
//     c=a+d;
//    // console.log(c);
// } catch(err){
//     console.log(err)
// }



// const fs = require('fs')
// fs.readFile('pratce.txt','utf-8',(err,data)=>{
//     try{
//         console.log(data);
//         throw "this is error due to wrong name of file"
//     }
//     catch(err){
//         console.log(err)
//     }
// }

// )




// const fs =require('fs')
// fs.readFile('pratice.txt','utf-8',(err,data)=>{
//     try{
//         console.log(data);
//     }
//     catch(err){
//         console.log(err)
//     }
// }

// )

const fs= require('fs')

  const data=fs.readFileSync('pratice.txt','utf-8',(err,data)=>{
   try{
    console.log(data)
   }
   catch{
    console.log("error");
   }
    

})
console.log(data)