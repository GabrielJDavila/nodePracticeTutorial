import { readFile, writeFile } from "node:fs";

console.log("start")
readFile('./testfolder/first.txt', 'utf8', (err, result) => {
    if(err) {
        console.log(err)
        return 
    }
    const first = result

    readFile('./testfolder/second.txt', 'utf-8', (err, result) => {
        if(err) {
            console.log(err)
            return 
        }
        const second = result
        writeFile(
            './testfolder/result-async.txt', `Here is the result async: ${first + second}`
            
        , (err, result) => {
            if(err) {
                console.log(err)
                return
            }
            console.log("done")
        })
    })
})
console.log("starting next task")