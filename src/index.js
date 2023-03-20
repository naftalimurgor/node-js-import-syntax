import express from 'express'
// Note: remember to include the file extension (.js)
import indexRouter from './router.js'

const app = express()
const PORT = process.env.PORT || 3000

// enable JSON parsing middleware to parse json.
app.use(express.json())
app.use('/index', indexRouter)

async function main() {
  app.listen(PORT, () => console.log('HTTP server up at PORT'))
}

main().catch((err) => console.error(err))
