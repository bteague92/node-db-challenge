const express = require('express');
const Projects = require('./project-model.js');
const router = express.Router();

router.get('/', (req, res) => {
    Projects.findProjects()
        .then(projects => {
            res.status(200).json(projects);
        })
        .catch(err => {
            res.status(500).json({ message: 'Failed to get projects' });
        });
});

router.get('/resources', (req, res) => {
    Projects.findResources()
        .then(resources => {
            res.json(resources);
        })
        .catch(err => {
            res.status(500).json({ message: 'Failed to get resources' });
        });
});

router.get('/tasks', (req, res) => {
    Projects.findTasks()
        .then(tasks => {
            res.json(tasks);
        })
        .catch(err => {
            res.status(500).json({ message: 'Failed to get tasks' });
        });

    // const id = req.params.id
    // Projects.findTasks(id)
    //     .then(tasks => {
    //         res.json(tasks);
    //     })
    //     .catch(err => {
    //         res.status(500).json(err);
    //     });
});

router.post('/', (req, res) => {
    const projectData = req.body;
    Projects.addProject(projectData)
        .then(project => {
            res.status(201).json(project);
        })
        .catch(err => {
            res.status(500).json({ message: 'Failed to create new project' });
        });
});

router.post('/resources', (req, res) => {
    const resourceData = req.body;
    Projects.addResource(resourceData)
        .then(resource => {
            res.status(201).json(req.body);
        })
        .catch(err => {
            res.status(500).json({ message: 'Failed to create new resource' });
        });
});

router.post('/tasks', (req, res) => {
    const taskData = req.body;
    Projects.addTask(taskData)
        .then(task => {
            res.status(201).json(req.body);
        })
        .catch(err => {
            res.status(500).json({ message: 'Failed to create new task' });
        });
});

module.exports = router;