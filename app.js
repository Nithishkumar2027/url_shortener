const express = require('express')
const mongoose  = require('mongoose')
const morgan = require('morgan')
const ShortUrl = require('./models/shortUrl')
const app = express()

const mongoURI = 'Your Mongo URL here'
mongoose.connect(mongoURI, {
    useNewUrlParser: true, useUnifiedTopology: true
})


app.set('view engine', 'ejs')
app.use(express.urlencoded({extended: false}))
app.use(morgan('dev'))

// Routes
app.get('/',async (req, res) => {
    const shorturls = await ShortUrl.find()
    res.render('index', {shorturls: shorturls})
})

app.post('/shortUrls',async (req,res) => {
    await ShortUrl.create({ full: req.body.fullUrl})
    res.redirect('/')
})

const port = process.env.PORT || 3000
app.listen(port, () => console.log(`server running at port ${port}`))
