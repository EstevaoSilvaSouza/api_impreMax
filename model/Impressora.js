const mongoose = require('mongoose')

const Impressora = mongoose.model('Impressoras', {
    'Nome': String,
    'Marca': String,
    'Modelo': String,
    'Tecnico': String,
    'Ip': String,
    'Mac': String,
})

module.exports = Impressora