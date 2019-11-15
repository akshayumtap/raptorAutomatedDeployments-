import { Router, Request, Response } from 'express'

const appRouter: Router = Router()
appRouter.get('/', (req: Request, res: Response, next) => {
  res.send('jhjhkjh')
})

export { appRouter } 