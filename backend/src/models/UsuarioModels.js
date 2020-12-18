const connection = require("../database/connection");
const { v4: uuidv4 } = require('uuid');

module.exports = {
    async create(usuario) {
        const newId = uuidv4(); // cria novo user_id aleatorio com a biblioteca uuid
        usuario.user_id = newId;

        await connection("usuario").insert(usuario);
        return newId;
    },

    async getById(targetId) {
        const result = await connection("usuario").where({ user_id: targetId }).select("*");
        return result;
    },

    async getEvery(){
        const result = await connection("usuario").select("*");
        return result;
    },

    async getByFields(fields) {
        const result = await connection("usuario").where(fields).select("*").first();
        return result;
    },

    async updateById(targetId, usuario) {
        const result = await connection("usuario")
        .where({ user_id: targetId })
        .update(usuario);

        return result;
    },

    async deleteById(targetId) {
        const result = await connection("usuario").where({ user_id: targetId }).delete();
        return result;
    }
}