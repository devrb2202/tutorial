// import { promises as fs } from 'fs'
// import { join } from 'path'
import test from '../data/test.json'

export default defineEventHandler(async () => {
  // path papunta sa test.json (relative to project root)
  // const filePath = join(process.cwd(), 'server/data/test.json')
  // const raw = await fs.readFile(filePath, 'utf-8')
  // return JSON.parse(raw)
  return test
  
})  

// export default defineEventHandler(async(event) => {
//   return { message: 'Pakyu'}
// })