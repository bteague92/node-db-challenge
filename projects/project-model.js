const db = require('../data/db-config.js');

module.exports = {
    findResources,///working
    addResource,///working
    findProjects,///working
    addProject, ///working
    findTasks,///working
    addTask///working
}

function numberToBoolean(int) {
    return int === 1 ? true : false
}

function findProjects() {
    const newProjects = db('projects').map(project => ({
        ...project,
        completed: numberToBoolean(project.completed)
    }))
    return newProjects
}

function addProject(project) {
    return db('projects')
        .insert(project)
        .then(ids => {
            return project
        })

}

function findResources() {
    return db('resources')
}

function addResource(resource) {
    return db('resources')
        .insert(resource)
        .then(ids => {
            return resource
        })
}

function findTasks() {
    // const newTasks = db('tasks').map(task => ({
    //     ...task,
    //     completed: numberToBoolean(task.completed)
    // }))
    const tasks = db('tasks as t')
        .select("p.name as projectName", "p.projectDescription", "t.id", "t.projectId", "t.taskDescription", "t.notes", "t.completed")
        .join("projects as p", "t.projectId", "p.id")

    const newTasks = tasks.map(task => ({
        ...task,
        completed: numberToBoolean(task.completed)
    }))
    return newTasks

    // .select("projects.name", "projects.description", "t.id", "t.taskDescription", "t.notes", "t.completed")
    // .join("tasks as t", "t.projectId", "projects.id")
    // .where("t.projectId", id)
}

function addTask(task) {
    return db('tasks')
        .insert(task)
        .then(count => {
            return task
        })

}