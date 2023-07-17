const _ = require('lodash');
const array = [1, [2, [3, [4]]]];

const newarray = _.flattenDeep(array);
console.log(newarray);