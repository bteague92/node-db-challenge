
exports.up = function (knex) {
    return knex.schema
        .createTable('projects', tbl => {
            tbl.increments()
            tbl.string('name', 200)
                .notNullable()
            tbl.string('projectDescription', 500)
            tbl.boolean('completed')
                .notNullable(false)
        })
        .createTable("resources", tbl => {
            tbl.increments();
            tbl.string("name", 255)
                .notNullable()
            tbl.integer("projectId")
                .unsigned()
                .notNullable()
                .references("id")
                .inTable("projects")
                .onDelete("CASCADE")
                .onUpdate("CASCADE")
        })
        .createTable("tasks", tbl => {
            tbl.increments()
            tbl.integer("projectId")
                .unsigned()
                .notNullable()
                .references("id")
                .inTable("projects")
                .onDelete("CASCADE")
                .onUpdate("CASCADE")
            tbl.string("taskDescription", 500)
                .notNullable()
            tbl.string('notes', 500)
            tbl.boolean('completed')
                .notNullable()
        })
}


exports.down = function (knex) {
    return knex.schema
        .dropTableIfExists('tasks')
        .dropTableIfExists('resources')
        .dropTableIfExists('projects')
}
