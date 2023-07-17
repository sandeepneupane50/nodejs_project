// const http = require('http');

// const server = http.createServer((req, res) => {
//     res.write('Hello from server');
//     res.end();
// })

// server.listen(5000);


const http = require('http');

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.end('welcome to our homepage')
    } else if (req.url === '/about') {
        res.end('welcome to our about page');
    } else {
        res.end(` <h1>Oops unable to reach</h1>
    <p>unable to get url location</p>
    <a href='/'>go back to home page</a>
    `);
    }
})

server.listen(5000);