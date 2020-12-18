const UsuarioModel = require("../models/UsuarioModels");
const firebase = require("../utils/firebase");

module.exports = {
    async create(req, res) {
        try {
            const usuario = req.body; // os dados do novo usuario chegam da requisicao

            const uid = await firebase.createNewUser(usuario.email, usuario.senha);
            //delete usuario.password;
            usuario.firebase_id = uid; // usuario e o nome da tabela (migration)

            const result = await UsuarioModel.create(usuario); // o result recebe o id do novo user criado
            console.log("New user created successfully.");
            return res.status(200).json({ newId: result }); // printa o novo id criado
        } catch (error) {
            console.warn("Internal server error while attempting to create new user:", error);
            return res.status(500).send("Internal server error while attempting to create new user.");
        }
    },
    
    async getByUsuario(req, res){
        try {
            const targetId = req.params.usuarioId;
            const result = await UsuarioModel.getById(targetId);

            res.status(200).json({ result });
        } catch (error) {
            console.warn("Internal server error while attempting to get user:", error);
            return res.status(500).send("Internal server error while attempting to get user.");
        }
    },

    async getUser(req, res){
        try {
            const result = await UsuarioModel.getEvery();
            res.status(200).json({ result });
        } catch (error) {
            console.warn("Internal server error while attempting to get user:", error);
            return res.status(500).send("Internal server error while attempting to get user.");
        }
    },

    async update(req, res){
        try {
            const targetId = req.params.usuarioId; // vem do params da rota
            const newUser = req.body;

            const result = await UsuarioModel.updateById(targetId, newUser);

            console.log("User updated successfully.");
            return res.status(200).json({ result }); // mostra o numero de entradas atualizadas
            
        } catch (error) {
            console.warn("Internal server error while attempting to update user:", error);
            return res.status(500).send("Internal server error while attempting to update user.");
        }
    },

    async delete(req, res){
        try {
            const targetId = req.params.usuarioId;
            const result = await UsuarioModel.deleteById(targetId);

            if(result === 0) 
                return res.status(400).send("User id not found.");

            return res.status(200).send("User deleted successfully.");
        } catch (error) {
            console.warn("Internal server error while attempting to delete user:", error);
            return res.status(500).send("Internal server error while attempting to delete user.");
        }
    }   
};
