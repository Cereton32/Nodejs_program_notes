const fs=require('fs')


console.log("1st line")
//timer is at fisrt priority of even loop
fs.readFile('large.txt',(data,err)=>{
  console.log("2nd priority : IO task/polling")
})
setTimeout(()=>{console.log(" 1st priority: Timer callback ")},0)
setImmediate(()=>{
 console.log("3rd priority : set imediate")
})
console.log("3rd line")
