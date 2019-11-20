import express from 'express'
//import Express, { Application } from 'express'
import accessLogStream from '../logger/logging'
import { config } from 'dotenv'
import { appRouter as apiRouer } from './routes'
//import { createLogger, transports ,format, level, info}from 'winston';
var morgan = require('morgan')
// ... Then later, the new code
//import expressWinston, { LoggerOptions } from 'express-winston';
const app = express()
// const loggerConfig: LoggerOptions = logger.info('Informing.');
// app.use(expressWinston.logger({

//     transports: [
//      // new (transports.Console)(),
//       new transports.File({filename:`logs/%DATE%.log`,level:'info'})
      
//     ]
//   }));
// app.use(expressWinston.logger(loggerConfig));


config()


app.use(express.static('public'))
app.use(morgan('combined', { stream: accessLogStream }))
 
app.use('/', apiRouer)
const port: number | string = process.env.PORT || 3000

app.listen(port, () => {
    console.info(`listening on port ${port}`)
})
            /* Some code */
        
// app.get('*', (req, res) => res.send('not found'))

//app.listen(port, () => {
    //console.info(`listening on port ${port}`)
//})
