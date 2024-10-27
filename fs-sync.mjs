import { readFileSync, write, writeFileSync } from "node:fs"

console.log("starting sync task")
const first = readFileSync('./testfolder/first.txt', 'utf8')
const second = readFileSync('./testfolder/second.txt', 'utf8')

writeFileSync(
    './testfolder/result-sync.txt', `Here is the result: ${first + second}`,
    {flag: 'a'}
)

console.log("done with sync")
console.log("starting next task")