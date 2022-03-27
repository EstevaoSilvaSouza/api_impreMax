const router = require('express').Router();
const { v4 } = require('uuid');
const { v4: uuidv4 } = require('uuid')

const ImpressControl = require('../controller/ImpressControl')

router.get('/', async (req, res) => {
    try {

        let ip = req.socket.remoteAddress
        res.status(200).json({ 'hash': uuidv4(), 'IP': ip, ' dados ': await ImpressControl.Find() })
    }
    catch (err) {
        res.status(500).json({ erro: `${err}` })
    }
})

router.post('/', async (req, res) => {
    const { Nome, Marca, Modelo, Tecnico, Ip, Mac } = req.body
    const objectModel = { Nome, Marca, Modelo, Tecnico, Ip, Mac }

    const check = ImpressControl.CheckModel(objectModel)
    if (check === false) {
        res.status(422).json({ msg: "falha ao cadastra!!" })
        return false
    }

    const creat = await ImpressControl.CreateImpre(objectModel)

    creat ? res.status(200).json({ msg: "cadastrado com sucesso" }) : res.status(500).json({ msg: 'falha ao cadastrar' })
})

router.get('/:id', async (req, res) => {
    const id = req.params;
    if (id.id.length != 24) {

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

router.delete('/:id', async (req, res) => {
    const id = req.params
    const check = await ImpressControl.DeleteImpres(id.id)

    check ? res.status(200).json({ msg: "deletado com sucesso!!" }) : res.status(500).json({ msg: ' falha ao deletar' })
})

module.exports = router