
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('resources').del()
    .then(function () {
      // Inserts seed entries
      return knex('resources').insert([
        {
          projectId: 1,
          name: "Bed",
          resourceDescription: "Must have bed"
        },
        {
          projectId: 1,
          name: "Covers",
          resourceDescription: "Need covers, to cover bed"
        },
        {
          projectId: 1,
          name: "Hands",
          resourceDescription: "Need two hands with at least 2 fingers on each hand to grab covers"
        },
        {
          projectId: 2,
          name: "Canvas",
          resourceDescription: "What you paint on"
        },
        {
          projectId: 2,
          name: "Paint",
          resourceDescription: "You spread it to make colors stick to stuff"
        },
        {
          projectId: 2,
          name: "Paintbrush",
          resourceDescription: "What you use to spread paint onto canvas"
        },
        {
          projectId: 3,
          name: "Lawn Mower",
          resourceDescription: "Need this to efficiently cut lawn"
        },
        {
          projectId: 3,
          name: "Lawn",
          resourceDescription: "In order to cut your lawn, you first need a lawn"
        },
        {
          projectId: 3,
          name: "Time",
          resourceDescription: "Must set enough time aside to finish cutting lawn"
        },
        {
          projectId: 4,
          name: "wood",
          resourceDescription: "Hard stuff you make stuff out of"
        },
        {
          projectId: 4,
          name: "Nails",
          resourceDescription: "Pierce things to hold things together or hang stuff on the wall"
        },
        {
          projectId: 4,
          name: "Paint",
          resourceDescription: "You spread it to make colors stick to stuff"
        }
      ]);
    });
};
