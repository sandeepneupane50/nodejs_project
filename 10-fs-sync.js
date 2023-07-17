const { readFileSync, writeFileSync } = require('fs');

console.log('start')

const first = readFileSync('./content/first.txt', 'utf-8');
const second = readFileSync('./content/second.txt', 'utf-8');

writeFileSync('./content/result-async.txt', `here is concatinated text: ${first}, ${second}`, {flag: 'a'});

console.log('done this task');

console.log('starting next task')