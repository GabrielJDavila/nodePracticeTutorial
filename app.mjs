import { readFile, writeFile } from 'node:fs'
import util from 'node:util'

const readFilePromise = util.promisify(readFile)
const writeFilePromise = util.promisify(writeFile)

const start = async() => {
    try {
        const first = await readFilePromise('./testfolder/first.txt', 'utf8')
        const second = await readFilePromise('./testfolder/second.txt', 'utf8')
        await writeFilePromise('./testfolder/write-new.txt', `${first} ${second}`, {flag: 'a'})
        console.log(first, second)
    } catch(err) {
        console.error("error fetching: ", err)
    }
}

start()

// const getText = (path) => {
//     return new Promise( (resolve, reject) => {
//         readFile(path, 'utf8', (err, data) => {
//             if(err) {
//                 reject(err)
//             } else {
//                 resolve(data)
//             }
//         })
//     })
// }

// const writeText = (path, first, second) => {
//     return new Promise((resolve, reject) => {
//         writeFile(path, `Here is the result ${first + second}`, (err, data) => {
//             if(err) {
//                 reject(err)
//             } else {
//                 resolve(data)
//             }
//         })
//     })
// }

// getText('./testfolder/first.txt')
//     .then(result => console.log(result))
//     .catch(err => console.error('error getting text: ', err))

// const server = http.createServer((req, res) => {
//     if(req.url === "/") {
//         res.end("Home Page")
//     }
//     if(req.url === "/about") {
//         for(let i = 0; i < 1000; i++) {
//             for(let j = 0; j < 1000; j++) {
//                 console.log(`${i}, ${j}`)
//             }
//         }
//         res.end("About Page")
//     }
// })

// server.listen(5000, () => {
//     console.log("Server running at http://localhost:5000/")
// })