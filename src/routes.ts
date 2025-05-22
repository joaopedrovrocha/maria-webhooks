import { Request, Response, Router } from 'express'

const routes = Router()

routes.post('/webhooks/receive', (req: Request, res: Response) => {
  console.log('req.body', req.body)

  return res.status(200).end()
})

export default routes
