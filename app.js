const express = require('express')
const morgan = require('morgan')

const app = express()
app.set('view engine', 'ejs')
app.use(morgan('dev'))

// Routes
app.get('/', (req, res) => {
    res.render('index')
})

const port = process.env.PORT || 3000
app.listen(port, () => console.log(`server running at port ${port}`))
