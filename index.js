const express = require('express');
const app = express()
const path = require('path')
const bodyParser = require('body-parser')

app.use('/', express.static(path.join(__dirname, 'app')))
app.use(bodyParser.json())

app.post('/login-with-facebook', async (req, res) =>{
    const{accessToken, userID} = req.body
})

app.listen(3000, _ => console.log("listening to port 3000"))
