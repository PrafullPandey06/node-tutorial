// local variable
const secret = 'SUPER SECRET'

// shared variable
const john = 'john'
const peter = 'peter'

// console.log(module); module has a object known as exports{} anything shared in exports can be accessed by any file in module

module.exports = {john, peter} // passing object