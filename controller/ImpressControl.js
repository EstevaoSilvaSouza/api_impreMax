const Impressora = require('../model/Impressora')

const functiActive = {
    CheckModel: function (model) {
        if (!model.Nome
            ||
            !model.Marca
            ||
            !model.Modelo
            ||
            !model.Tecnico
            ||
            !model.Ip
            ||
            !model.Mac
        ) {
            return false
        }
        return true
    },

    async CreateImpre(model) {
        try {
            await Impressora.create(model);
            return true
        }
        catch (err) {
            console.log(err)
            return false
        }
    },
    async Find() {
        try {
            return await Impressora.find();
        }
        catch (err) {
            console.log(err)
        }
    },
    async FindId(id) {
        try {
            return await Impressora.findOne({ _id: id })
        } catch (e) {
            console.log(e)
        }
    },
    async UpdateImpres(id, objModel) {
        try {
            const checkId = await Impressora.findOne({ _id: id })

            if (!checkId) {
                return false
            }

            await Impressora.updateOne({ _id: id }, objModel);
            return true

        } catch (e) {
            console.log(e)
        }
    },
    async DeleteImpres(id) {
        try {
            const delet = await Impressora.deleteOne({ _id: id });
            return delet ? true : false

        } catch (e) {
            console.log(e)
        }
    }

}

module.exports = functiActive