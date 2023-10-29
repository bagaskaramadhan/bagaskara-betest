const express = require('express');
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const router = require('./routes/index');
require('dotenv').config()

const app = express()
app.get('/', (req, res) => {
    res.send("Hello No API")
})

app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())
app.use('/', router)

const URL = `mongodb://bagaskaramadhan:bagaskaramadhan97@ac-bicizt8-shard-00-00.tvmvqzk.mongodb.net:27017,ac-bicizt8-shard-00-01.tvmvqzk.mongodb.net:27017,ac-bicizt8-shard-00-02.tvmvqzk.mongodb.net:27017/db_bagaskara_betest?ssl=true&replicaSet=atlas-13rf70-shard-0&authSource=admin&retryWrites=true&w=majority`
mongoose.connect(URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => {
        console.log(`Connected MongoDB`)
        app.listen(3000, () => {
            console.log(`RUNNING ON PORT ${3000}`)
        })
    })
    .catch(err => console.log(err));