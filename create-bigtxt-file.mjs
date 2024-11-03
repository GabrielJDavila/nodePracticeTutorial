import { writeFileSync } from 'node:fs'

for(let i = 0; i < 10000; i++) {
    writeFileSync('./testfolder/big.txt', `hello world ${i}\n`, {flag: 'a'})
}
