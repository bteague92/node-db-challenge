
exports.up = function (knex) {
    return knex.schema
        .createTable('projects', tbl => {
            tbl.increments()
            tbl.string('name', 200)
                .notNullable()
            tbl.string('projectDescription', 500)
            tbl.boolean('completed')
                .default(false)
                .notNullable()
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
            tbl.string('resourceDescription', 500)
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
                .unique()
            tbl.string('notes', 500)
            tbl.boolean('completed')
                .notNullable()
        })
}


exports.down = function (knex) {
    return knex.schema
        .dropTableIfExists('projects')
        .dropTableIfExists('tasks')
        .dropTableIfExists('resources')
}
