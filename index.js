const express = require('express')
const mongoose = require('mongoose')

const app = express()
const port = 3331

const Impressora = require('./routers/Impressora')

//Middleware
app.use(express.urlencoded({
    extended: 'true'
}))

app.use(express.json())




app.get('/', (req, res) => {
    res.json({ msg: 'entrou jovem' })
})

app.use('/impre', Impressora)

const pass = encodeURIComponent(env.pass);

const startServer = async () => {
    await mongoose.connect(`mongodb+srv://${env.login}:${pass}@env.host.4beg4.env.host.net/env.db?retryWrites=true&w=majority`)
        .then(
            app.listen(port, () => {
                console.log(`Server online : http://localhost:${port}`)
            })
        )
        .catch(err => console.log(err))
}

startServer()