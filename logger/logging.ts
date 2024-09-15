var fs = require('fs')
var morgan = require('morgan')
var path = require('path')
var rfs=require('rotating-file-stream')
var logDirectory=path.join(__dirname,'log')
fs.existsSync(logDirectory) || fs.mkdirSync(logDirectory)
 
// create a rotating write stream
var accessLogStream = rfs('access.log', {
  interval: '1d', 
  // rotate every 1 day
  
  path: logDirectory
})
//console.log(accessLogStream)
// create a write stream (in append mode)
// var accessLogStream = fs.createWriteStream(__dirname +'/access.log', { flags: 'a' })
//  console.log("Log"+JSON.stringify(accessLogStream))
// // setup the logger

export default accessLogStream