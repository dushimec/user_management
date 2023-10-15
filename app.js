require('dotenv').config();
const express =require('express');
const app = express()
const expressLayoute = require('express-ejs-layouts');
const port = process.env.PORT || 5000

// Static Files
app.use(express.urlencoded({extended: true}))
app.use(express.json())

// static Files
app.use(express.static('public'))

// templating Engine
app.use(expressLayoute)
app.set('layout','./layouts/main')
app.set('view engine', 'ejs')

 app.use('/', require('./server/routes/customer'))


// Hundls 404
app.use('/',(req,res)=>{
    res.status(404).render("404")
})


app.listen(port, () =>{
    console.log(`App is runing on: http://localhost:${port}`);
})