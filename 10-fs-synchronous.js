// there are 2 ways of using File Module 
// 1. Blocking code 2. Non Blocking code

const {readFileSync, writeFileSync} = require('fs')
// this is same as declaration of os or path module

// 2 attributes 1.path 2.encoding later NODE will decode it itself 
const first = readFileSync('./content/first.txt', 'utf8')
const second = readFileSync('./content/second.txt', 'utf8')

console.log(first, second);

// this is like open system call in linux
// if file it will overwrite else it will create new file
// flag : 'a' instead of overwrite it will append the content (optional)
writeFileSync('./content/result-syn.txt', 
`Here is the result ${first}, ${second}`,
{flag : 'a'}
)