const express=require('express')
const hbs=require('hbs')
var app=express()
app.use(express.static(__dirname))
app.set('view engine','hbs')

app.get('/',(req,res)=>{
    res.send('salam')
})
app.get('/about',(req,res)=>{
    res.render('about.hbs',{
        title:'salam',
        matn:new Date().getUTCFullYear()
    })
})
app.listen(8000)