const names = require('./3-names')

console.log(names);

const greeting = require('./4-utils');
const items = require('./6-differentflavour');

require('./mindgranade');
greeting('sita');
greeting(names.ram);
greeting(names.shyam);
greeting(items.items);
greeting(items.SinglePerson);