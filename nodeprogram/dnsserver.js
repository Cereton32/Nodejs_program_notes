const dns = require('dns');  
dns.lookup('www.javatpoint.com', (err, addresses, family) => {  
  console.log('addresses:', addresses);  
  console.log('family:',family); 
  console.log(err) //server famile means how many server are required to host that
});  



console.log(dns.getServers());

