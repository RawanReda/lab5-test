const express = require("express")
const app = express()

app.get('/', (req,res) => {
    res.send('You just created a container for your app')
})

app.listen(3000)