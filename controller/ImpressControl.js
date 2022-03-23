const Impressora = require('../model/Impressora')

const functiActive = {
    Create: async function (model) {
        try {
            await Impressora.create(model);
            return 'ok'
        }
        catch (err) {
            console.log(err)
        }
    },
    Find: async function () {
        try {
            return await Impressora.find();
        }
        catch (err) {
            console.log(err)
        }
    },
    FindId: async function (id) {
        try {
            return await Impressora.findOne({ _id: id })
        } catch (e) {
            console.log(e)
        }
    },
    UpdateImpres: async function (id, objModel) {
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
    }

}

module.exports = functiActive