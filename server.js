const express = require('express')
const PORT = process.env.HTTP_PORT || 5000
const app = express()
const cors = require('cors');
const path = require('path')

app.use(cors())
// app.use(express.static(path.join(__dirname, 'client', 'build')))

app.get('/home', (req, res) => {
    res.json(`Hello World`)
});

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}.`)
})