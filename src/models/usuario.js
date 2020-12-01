const connection = require("../database/connection");

module.exports = {
    async create(usuario) {
        const result = await connection("usuario").insert(usuario);
        return result;
    },

    async getById({ user_id }) {
        const result = await connection("usuario").where({ user_id }).select("*");
        return result;
    },

    async updateById(user_id, usuario) {
        const result = await connection("usuario").where(user_id).update(usuario);
        return result;
    },
    async deleteById(user_id) {
        const result = await connection("usuario").where({ user_id }).delete();
        return result;
    }
}