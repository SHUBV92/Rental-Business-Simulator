const express = require('express')
const PORT = process.env.HTTP_PORT || 5000
const app = express()
const path = require('path')

app.use(express.static(path.join(__dirname, 'client', 'build')))

app.get('/', (req, res) => {
    res.send("Hello World")
});

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}.`)
})