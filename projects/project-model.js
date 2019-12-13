const db = require('../data/db-config.js');

module.exports = {
    findResources,
    addResource,
    findProjects,
    addProject,
    findTasks,
    addTask
}

function findResources() {
    return db('projects')
}

function addResource() {
    return db('projects').where({ id })
}

function findProjects() {
    return db('projects')

}

function addProject() {
    return db('projects')

}

function findTasks(id) {
    return db('projects')

}

function addTask(id) {
    return db('projects')

}