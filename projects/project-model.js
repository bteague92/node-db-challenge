const db = require('../data/db-config.js');

module.exports = {
    findResources,
    addResource,
    findProjects,
    addProject,
    findTasks,
    addTask
}

function findProjects() {
    return db('projects')
        .select()
}

function addProject(project) {
    return db('projects')
        .insert(project)
        .then(ids => {
            const [id] = ids;
            return findById(id).first()
        })

}

function findResources() {
    return db('resources')
}

function addResource(resource) {
    return db('resources')
        .insert(resource)
        .then(ids => {
            const [id] = ids;
            return findById(id).first()
        })
}

function findTasks(id) {
    return db('tasks')

    // .select("projects.name", "projects.description", "t.id", "t.taskDescription", "t.notes", "t.completed")
    // .join("tasks as t", "t.projectId", "projects.id")
    // .where("t.projectId", id)
}

function addTask(task) {
    return db('tasks')
        .insert(task)
        .then(ids => {
            const [id] = ids;
            return findById(id).first()
        })

}