// CommonJS, every file is like module (by default)
// Modules - Encapsulated Code (only share what we want to share)

// after export from 4-name.js we want to get that exported thing so use another global variable

const names = require('./4-names')
const sayHi = require('./5-util')
const data = require('./6-alternative-syntax')

require('./7-mind-granades')

//console.log(data)
//console.log(names);


//sayHi('susan')
//sayHi(names.john)
//sayHi(names.peter)