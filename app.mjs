
// ---- Simple way to create a basic server with express, and read html to the page for the frontend
// import express from 'express'
// import { readFile } from 'node:fs'
// import util from 'node:util'

// const readFilePromise = util.promisify(readFile)

// const app = express()

// app.get('/', async (req, res) => {
//     res.send(await readFilePromise('./index.html', 'utf8'))
// })

// app.listen(5000, () => {
//     console.log('listening on http://localhost:5000/')
// })

// ---- createReadStream is best for larger files, which allows us to break down the data into smaller chunks.
import { createReadStream }  from 'node:fs'
import http from 'node:http'

console.log(process.env.USER)
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