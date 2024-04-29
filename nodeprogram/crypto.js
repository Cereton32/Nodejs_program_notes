const crypto = require('crypto')
//calling crypto lib
const secretkey="abcdef"
//creating a secretkey
const data=crypto.createHmac('sha256',secretkey)
// create a hmac code
.update("welcome tbhis is abhishek")
//include the data we want to send
.digest('hex')
//create in form of hexadecimal
console.log(data)




 
const decipher = crypto.createDecipher('aes192', 'abcdef');  
var encrypted = '6b6cc9917e99bf149a8378a310c4675d799a2c21bd7c2831ecb50f06ea48e99b';  
var decrypted = decipher.update(encrypted, 'hex', 'utf8');  
decrypted += decipher.final('utf8');  
console.log(decrypted); 


