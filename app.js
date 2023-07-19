// const _ = require('lodash');
// const array = [1, [2, [3, [4]]]];

// const newarray = _.flattenDeep(array);
// console.log(newarray, 'hello wors');

var http = require('http');
var fs = require('fs');

http.createServer(function (req, res)  {
    // const text = fs.readFileSync('./content/big.txt', 'utf-8')
    // res.end(text);
    const fileStream = fs.readFileSync('./content/big.txt', 'utf-8');
    fileStream.on('open', ()=> {
        fileStream.pipe(res);
    });
    fileStream.on('error', (err)=>{
        res.end(err);
    })
})

.listen(5000);
