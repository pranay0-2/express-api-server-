require('dotenv').config()

const express = require('express')
const app = express()
const port = 3000

const githubData = {"Login" : "pranay"};
const youtube = {"signIn" : "prapti"};

app.get('/', (req , res) =>{
    res.send('Hello World')
})

app.get('/login', (req , res) =>{
    res.send('Please Login!')
})

app.get('/github' , (req,res) =>{
    res.json(githubData)
})
app.get('/youtube' , (req,res) =>{
    res.json(youtube)
})

app.listen(port, () =>{
    console.log(`app listening on port ${port}`)
})