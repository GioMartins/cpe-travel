const LocalModel = require("../models/LocalModels");

module.exports = {
    async create(req, res) {
        try {
            const local = req.body; // os dados do novo usuario chegam da requisicao

            const result = await LocalModel.create(local); // o result recebe o id do novo local criado
            console.log("New local created successfully.");
            return res.status(200).json({ newId: result }); // printa o novo id criado
        } catch (error) {
            console.warn("Internal server error while attempting to create new local:", error);
            return res.status(500).send("Internal server error while attempting to create new local.");
        }
    },
    
    async getByLocal(req, res){
        try {
            const localId = req.params.localId;
            const usuarioId = req.params.usuarioId;
            const result = await LocalModel.getById(localId, usuarioId);

            res.status(200).json({ result });
        } catch (error) {
            console.warn("Internal server error while attempting to get user:", error);
            return res.status(500).send("Internal server error while attempting to get user.");
        }
    },

    async update(req, res){
        try {
            const targetId = req.params.localId; // vem do params da rota
            const newLocal = req.body;

            const result = await LocalModel.updateById(targetId, newLocal);

            console.log("Local updated successfully.");
            return res.status(200).json({ result }); // mostra o numero de entradas atualizadas
            
        } catch (error) {
            console.warn("Internal server error while attempting to update local:", error);
            return res.status(500).send("Internal server error while attempting to update local.");
        }
    },

    async delete(req, res){
        try {
            const targetId = req.params.localId;
            const result = await LocalModel.deleteById(targetId);

            if(result === 0) 
                return res.status(400).send("local id not found.");

            return res.status(200).send("local deleted successfully.");
        } catch (error) {
            console.warn("Internal server error while attempting to delete local:", error);
            return res.status(500).send("Internal server error while attempting to delete local.");
        }
    }   
};