
const EventEmitter = require('events');

const customEmitter = new EventEmitter();

customEmitter.on('response', (name, id)=> {
    console.log(`hello response: ${name} ${id}`);
})

customEmitter.on('response', ()=> {
    console.log('some other logic');
})
customEmitter.emit('response', 'ram', 32);