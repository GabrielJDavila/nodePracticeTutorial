import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const filePath = path.join('/testfolder', 'subfolder', 'test.mjs')
console.log(filePath)
console.log(path.basename(filePath))

const absolute = path.resolve(__dirname, 'testfolder', 'subfolder', 'test.mjs')
console.log(absolute, "works")