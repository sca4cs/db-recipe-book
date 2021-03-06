
exports.up = function(knex, Promise) {
    return knex.schema.createTable('instructions', function(tbl) {
        tbl.increments();
        
        tbl.integer('recipe_id').unsigned().notNullable().references('id').inTable('recipes');

        tbl.integer('step_number').unsigned().notNullable();

        tbl.string('step_instruction').notNullable();
    });
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('instructions');
};
