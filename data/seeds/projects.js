exports.seed = function (knex) {
    // Deletes ALL existing entries
    return knex('projects').del()
        .then(function () {
            // Inserts seed entries
            return knex('projects').insert([
                {
                    name: "Make bed",
                    projectDescription: "Need to make my bed",
                    completed: false
                },
                {
                    name: "Paint a picture",
                    projectDescription: "Paint a pretty picture to hang on the wall",
                    completed: true
                },
                {
                    name: "Cut lawn",
                    projectDescription: "Cut grass. It hasnt been cut in months",
                    completed: false
                },
                {
                    name: "Build a birdhouse",
                    projectDescription: "Build a birdhouse with son",
                    completed: true
                }
            ]);
        });
};