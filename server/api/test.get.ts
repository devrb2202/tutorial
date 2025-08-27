import test from '../data/test.json'
import layout from '../data/nuxt/layout.json'

export default defineEventHandler(async () => {
  return test
  
})  

// import { promises as fs } from 'fs'
// import { join } from 'path'

// export default defineEventHandler(async(event) => {
//   return { message: 'Pakyu'}
// })

// path papunta sa test.json (relative to project root)
  // const filePath = join(process.cwd(), 'server/data/test.json')
  // const raw = await fs.readFile(filePath, 'utf-8')
  // return JSON.parse(raw)