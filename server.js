console.log('May Node be with you')

const express = require('express');
const bodyParser = require('body-parser')
const app = express()
const MongoClient = require('mongodb').MongoClient
const connectionString = 'mongodb+srv://ajbarosy:0g8gaXDq5WXYDx5G@cluster0.0sutg1j.mongodb.net/?retryWrites=true&w=majority'

MongoClient.connect(connectionString, (err, client) => {
    if(err) return console.error(err)
    console.log('Connected to Database')
})


app.use(bodyParser.urlencoded({extended: true}))


app.listen(3000, function(){
    console.log('listening on 3000')
})

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html')
})

app.post('/quotes', (req, res) => {
    console.log(req.body)
})