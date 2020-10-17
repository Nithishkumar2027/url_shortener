const express = require('express')
const morgan = require('morgan')

const app = express()

app.use(morgan('dev'))
app.get('/', (req, res) => {
    res.send('Hello world')
})

const port = process.env.PORT || 3000
app.listen(port, () => console.log(`server running at port ${port}`))
