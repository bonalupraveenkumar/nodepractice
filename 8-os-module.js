const os = require('os')
console.log(os.platform())

const user = os.userInfo()
console.log(user)

console.log(`The System Uptime is ${os.uptime()}`)

console.log(`The Total Memory ${os.totalmem()}`)

const currentOs ={
   name : os.type(),
   release : os.release(),
   totalMem : os.totalmem(),
   freeMem : os.freemem()

}

console.log(currentOs)