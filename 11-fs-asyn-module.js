const {readFile, writeFile} = require('fs')

// asynchronous way for fs-module it is like add eventlistner that when we need to do something than a 'call Back function' will run
// if won't provide utf8 than we'll get encoded code
readFile('./content/first.txt', 'utf8', (err, result) => {
    if(err) {
        console.log(err);
        return
    }
   // console.log(result) will be initialised only inside callback function


// now we want to assign the file to some variable
const first = result
readFile('./content/second.txt', 'utf8', (err, result)=> {
    if(err) {
        console.log(err);
        return
    }
    const second = result
    writeFile('./content/result-async.txt', 
    `Here is the result : ${first}, ${second}`,
    (err, result) => {
        if(err) {
            console.log(err);
            result
        }
        console.log(result);
    })
})
})