const http = require('http')

// 2 object as attribute 
// we can merge 'write' and 'end' can be merged into 1 element i.e. 'end' only

// res is a very big object remember it.
const server = http.createServer((req, res) => {
  /*  console.log(req);
    res.write('welcome to our page')
    res.end() */

    if(req.url === '/') {
        res.end('Welecome to our home page');
    }
    else if(req.url === '/about') {
        res.end('Here is our short history');
    }
    else { res.end(`
      <h1>Oops!</h1>
      <p>we can't seem to find the page you are looking for</p>
      <a href = "/">back home</a>
    `)
  }
})

server.listen(5000)