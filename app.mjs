import { createReadStream }  from 'node:fs'

const stream = createReadStream('./testfolder/big.txt', {highWaterMark: 90000, encoding: 'utf8'})

stream.on('data', (result) => {
    console.log(result)
})
stream.on('error', (err) => {
    console.log('error reading stream: ', err)
})
// import http from 'node:http'

// const server = http.createServer()

// server.on('request', (req, res) => {
//     res.end('welcome')
// })

// server.listen(5000)