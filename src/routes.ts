import { Router, Request, Response } from 'express'

const routes = Router()

routes.get('/', (req: Request, res: Response) => {
  return res
    .status(200)
    .json({ data: 'Hello, World!' })
})

export default routes