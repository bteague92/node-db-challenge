
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('tasks').del()
    .then(function () {
      // Inserts seed entries
      return knex('tasks').insert([
        {
          projectId: 1,
          taskDescription: "Spread sheet on bed",
          notes: "Do this first",
          completed: true
        },
        {
          projectId: 1,
          taskDescription: "Spread comforter on bed",
          notes: "Do this second",
          completed: false
        },
        {
          projectId: 1,
          taskDescription: "Put pillows on",
          notes: "Do this last",
          completed: false
        },
        {
          projectId: 2,
          taskDescription: "Dip brush in paint",
          completed: true
        },
        {
          projectId: 2,
          taskDescription: "Spread paint on canvas",
          completed: true
        },
        {
          projectId: 2,
          taskDescription: "Marvel",
          completed: true
        },
        {
          projectId: 3,
          taskDescription: "Turn lawn mower on",
          completed: false
        },
        {
          projectId: 3,
          taskDescription: "Run over grass",
          completed: false
        },
        {
          projectId: 3,
          taskDescription: "Look forward to doing it again in a week",
          completed: false
        },
        {
          projectId: 4,
          taskDescription: "Put wood together",
          notes: "Before nails",
          completed: true
        },
        {
          projectId: 4,
          taskDescription: "Put nails through wood",
          completed: true
        },
        {
          projectId: 4,
          taskDescription: "Paint it to make it pretty",
          completed: true
        }
      ]);
    });
};
