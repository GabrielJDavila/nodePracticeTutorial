import EventEmitter from 'node:events'
const customEmitter = new EventEmitter()

customEmitter.on('response', () => {
    console.log(`data received`)
})
customEmitter.on('response', () => {
    console.log(`data received`)
})

customEmitter.emit('response')