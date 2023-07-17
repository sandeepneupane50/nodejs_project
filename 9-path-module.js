const path = require('path')

console.log(path.sep);

const filePath = path.join('/content', 'subfolder', 'text.txt')
console.log(filePath);

const base = path.basename(filePath);
console.log(base);

const base1 = path.basename(path.join('/content', 'subfolder', 'text.txt'));
console.log(base1);

// to find the path of current directory
const absolute = path.resolve(__dirname);
console.log(absolute);

// to find the path of current file
const absolute1 = path.resolve(__filename);
console.log(absolute1);

// to find the path of req file/folder
const absolute2 = path.resolve(__dirname, 'content', 'subfolder', 'text.js');
console.log(absolute2);