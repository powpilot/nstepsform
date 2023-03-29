
const express = require('express')
const apiRouter = require('./routers/apirouter')
//const port = process.env.PORT
const port =3000

const cors = require('cors');

const app = express()
app.use(cors());
app.options('*', cors());
app.use(express.json())
app.use(apiRouter)

app.listen(port, () => {
    console.log(`Server running on port ${port}`)
})
