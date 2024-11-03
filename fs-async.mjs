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

// import { readFile, writeFile } from "node:fs";

// console.log("start")
// readFile('./testfolder/first.txt', 'utf8', (err, result) => {
//     if(err) {
//         console.log(err)
//         return 
//     }
//     const first = result

//     readFile('./testfolder/second.txt', 'utf-8', (err, result) => {
//         if(err) {
//             console.log(err)
//             return 
//         }
//         const second = result
//         writeFile(
//             './testfolder/result-async.txt', `Here is the result async: ${first + second}`
            
//         , (err, result) => {
//             if(err) {
//                 console.log(err)
//                 return
//             }
//             console.log("done")
//         })
//     })
// })
// console.log("starting next task")