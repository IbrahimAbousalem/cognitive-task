const express = require('express')
require('./db/mongoose')
const campaignRouter = require('./routers/campaign')

const app = express()
const port = process.env.PORT || 3000

// automatic parse incoming json to an object so we can access it in our request handler
app.use(express.json())
app.use(campaignRouter)

app.listen(port, ()=>{
    console.log('Server is up on port ' + port)
})
