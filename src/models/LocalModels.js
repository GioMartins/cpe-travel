const connection = require("../database/connection");
const { v4: uuidv4 } = require('uuid');

module.exports = {
    async create(local) {
        const newId = uuidv4(); // cria novo local_id aleatorio com a biblioteca uuid
        local.local_id = newId;
        
        const result = await connection("local").insert(local);
        return result;
    },

    async getById(localId, usuarioId) {
        const result = await connection("local").where({ local_id: localId, user_id: usuarioId }).select("*");
        return result;
    },

    async updateById(targetId, local) {
        const result = await connection("local").where({ local_id: targetId }).update(local);
        return result;
    },
    
    async deleteById(targetId) {
        const result = await connection("local").where({ local_id: targetId }).delete();
        return result;
    }
}