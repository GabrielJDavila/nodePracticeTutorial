import { createReadStream }  from 'node:fs'
import http from 'node:http'

http
    .createServer((req, res) => {
        const fileStream = createReadStream('./testfolder/big.txt', 'utf8')
        fileStream.on('open', () => {
            fileStream.pipe(res)
        })
        fileStream.on('error', (err) => {
            res.end(err)
            console.log('error reading stream: ', err)
        })
    })
    .listen(5000, () => {
        console.log('listening on http://localhost:5000/')
    })

// const stream = createReadStream('./testfolder/big.txt', {highWaterMark: 90000, encoding: 'utf8'})

// stream.on('data', (result) => {
//     console.log(result)
// })
// stream.on('error', (err) => {
//     console.log('error reading stream: ', err)
// })
// import http from 'node:http'

// const server = http.createServer()

// server.on('request', (req, res) => {
//     res.end('welcome')
// })

// server.listen(5000)