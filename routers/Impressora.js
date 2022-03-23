const router = require('express').Router();

const message = require('../controller/teste')
const ImpressControl = require('../controller/ImpressControl')

router.get('/', async (req, res) => {
    try {
        res.status(200).json({ 'dados': await ImpressControl.Find() })
    }
    catch (err) {
        res.status(500).json({ erro: `${err}` })
    }
})

router.post('/', async (req, res) => {
    const { Nome, Marca, Modelo, Tecnico, Ip, Mac } = req.body
    const objectModel = { Nome, Marca, Modelo, Tecnico, Ip, Mac }
    ImpressControl.Create(objectModel)
    if (ImpressControl.Create = 'ok') {
        res.status(200).json({ msg: 'cadastrado com sucesso!!!' })
    }
})

router.get('/:id', async (req, res) => {
    const id = req.params;
    if (id.id.length < 24) {

        res.status(401).json({ msg: 'falha ao processar!!' })
        return false

    }

    res.status(200).json({ 'id': await ImpressControl.FindId(id.id) })
})

router.patch('/:id', async (req, res) => {
    const id = req.params
    const { Nome, Marca, Modelo, Tecnico, Ip, Mac } = req.body
    const objectModel = { Nome, Marca, Modelo, Tecnico, Ip, Mac }
    res.status(200).json({ msg: await ImpressControl.UpdateImpres(id.id, objectModel) })


})

module.exports = router