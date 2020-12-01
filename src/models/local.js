const connection = require("../database/connection");

module.exports = {
    async create(local) {
        const result = await connection("local").insert(local);
        return result;
    },

    async getById({ local_id, user_id }) {
        const result = await connection("local").where({ local_id, user_id }).select("*");
        return result;
    },

    async updateById(local_id, local) {
        const result = await connection("local").where(local_id).update(local);
        return result;
    },
    async deleteById(local_id) {
        const result = await connection("local").where({ local_id }).delete();
        return result;
    }
}