const express = require('express');
const path = require('path');
const bodyParser = require('body-parser')

const app = express();

//Requiero e archivo

let indexRouter = require('./routes/index.js')
let userRouter = require('./routes/user.js')
let cochesRouter = require('./routes/coches.js')

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use(express.static(__dirname + '/public'));

//llamo al archivo

app.use('/', indexRouter)
app.use('/user', userRouter)
app.use('/coches', cochesRouter)

/*
app.get('/', function(req, res) {
   
    res.send('OK')
   
 })
 */

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});