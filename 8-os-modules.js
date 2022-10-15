const os = require('os') // since os is built in module so we can pass it directly

// info about current user
const user = os.userInfo()
console.log(user)

// method returns system uptime in seconds
console.log(`The system uptime is ${os.uptime()} seconds`)

const currentOS = {
    name : os.type(),
    release : os.release(),
    totalMem : os.totalmem(),
    freeMem : os.freemem()
}

console.log(currentOS)