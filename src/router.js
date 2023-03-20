import { Router } from 'express'

// create an Instance of the Router
const indexRouter = Router()

indexRouter.get('/', (req, res) => {
  res.json({ message: 'Hello Champ!' })
})

export default indexRouter