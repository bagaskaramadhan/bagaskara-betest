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

const URL = `mongodb://${process.env.MONGO_USERNAME}:${process.env.MONGO_PASSWORD}@ac-bicizt8-shard-00-00.tvmvqzk.mongodb.net:27017,ac-bicizt8-shard-00-01.tvmvqzk.mongodb.net:27017,ac-bicizt8-shard-00-02.tvmvqzk.mongodb.net:27017/${process.env.MONGO_DATABASE}?ssl=true&replicaSet=atlas-13rf70-shard-0&authSource=admin&retryWrites=true&w=majority`
mongoose.connect(URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => {
        console.log(`Connected MongoDB`)
        app.listen(process.env.PORT, () => {
            console.log(`RUNNING ON PORT ${process.env.PORT}`)
        })
    })
    .catch(err => console.log(err));


    // "mongodb+srv://dombalatex:bagaskaramadhan97@bagaskarabetest1.tvmvqzk.mongodb.net/db_bagaskara_betest?retryWrites=true&w=majority"