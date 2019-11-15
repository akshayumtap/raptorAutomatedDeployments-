import Express, { Application } from 'express'
import { config } from 'dotenv'
import { appRouter as apiRouer } from './routes'
config()

const app: Application = Express()

app.use(Express.static('public'))
app.use('/api', apiRouer)
// app.get('*', (req, res) => res.send('not found'))
const port: number | string = process.env.PORT || 3000

app.listen(port, () => {
    console.info(`listening on port ${port}`)
})
