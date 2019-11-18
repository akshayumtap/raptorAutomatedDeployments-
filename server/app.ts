// import * as Express from 'express'
import  express from 'express';
import {join} from 'path'
//const Express = require('express')
import { config } from 'dotenv'
import { appRouter as apiRouer, appRouter } from './routes'
import { format } from 'path';
const passport = require('passport')
const passportSetup = require('../config/passport-setup')
const User = require('../models/user-model')
const mongoose = require('mongoose')
config()
const app = express()


app.use(passport.initialize())

//To enable render() to html
app.set('views', join(__dirname, 'views'));
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');


mongoose.connect('mongodb://127.0.0.1:27017/user', { useNewUrlParser: true }, () => {
    console.log("MongoDb is connected \n")

})


// User.find({}).then((usr: string) => {
//     console.log("User-----\n" + usr)
//     console.log("Size of record =")
// })


app.use(express.static('public'))
app.use('/', appRouter)
// app.get('*', (req, res) => res.send('not found'))
const port: number | string = process.env.PORT || 3001

app.listen(port, () => {
    console.info(`listening on port ${port}`)
})
