const express = require("express")
const app = express()

// CRUD API (Create, Read, Update, and Delete.) GET/read POST/(creating a post, forms) PUT/update eg liking a post DELETE

app.get('/', (req, res) => {
    res.send('Hello')
})

app.get('/yo', (res, res) => {
    res.send('second page')
})


app.listen(2222)