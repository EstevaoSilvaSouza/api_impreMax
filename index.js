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



const startServer = async () => {
    await mongoose.connect(`mongodb+srv://Event.null:${Event.null}@Event.4beg4.mongodb.net/Event.null?retryWrites=true&w=majority`)
        .then(
            app.listen(port, () => {
                console.log(`Server online : http://localhost:${port}`)
            })
        )
        .catch(err => console.log(err))
}

startServer()