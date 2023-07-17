const { readFile, writeFile } = require('fs');

console.log('starting a task');

readFile('./content/first.txt', 'utf-8', (err, result) => {
    if(err) {
        console.log(err);
        return
    }
    const first = result;
    readFile('./content/second.txt', 'utf-8', (err, result) => {
        if(err) {
            console.log(err);
            return
        }
        const second = result;
        writeFile('./content/result-async.txt', `here we concatinate file1 and file2 as: ${first}, ${second}`
        , (err, result) => {
            if(err) {
                console.log(err)
                return
            }
            console.log('done with this task');
        })
    })
})

console.log('starting a new task');