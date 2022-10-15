// path module important because it will help us to identify path where app is running no matter whose machine it is

const path = require('path')

console.log(path.sep); "/ is path seperator"

const filePath = path.join('/content', 'subfolder', 'test.txt') // join all the pathn into one path
console.log(filePath)

const base = path.basename(filePath)
console.log(base); // print last file/folder

// this is important __dirname = GOLBAL variable
const absolute = path.resolve(__dirname, 'content', 'subfolder', 'test.txt')
console.log(absolute);