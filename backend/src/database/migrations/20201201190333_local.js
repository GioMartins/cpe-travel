
exports.up = function(knex) {
    return knex.schema.createTable("local", function(table){
        table.string("local_id").primary().notNullable();
        table.string("nome").notNullable();
        table.string("pais").notNullable();
        table.string("preco").notNullable();
        table.string("intinerario").notNullable();
        table.string("user_id").notNullable();
        table.foreign("user_id").references("user_id").inTable("usuario").onDelete("cascade");
    });
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTable("local");
  };
  