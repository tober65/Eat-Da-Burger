// Import the ORM to create functions that will interact with the database.
const orm = require("../config/orm.js");

const cat = {
  all: (cb) => {
    orm.selectAll("burgers", (res) => {
      cb(res);
    });
  },
  // The variables cols and vals are arrays.
  create: (newBurger, cb) => {
    orm.insertOne("burgers", newBurger, (res) => {
      cb(res);
    });
  },
  update: (burgerData, criteria, cb) => {
    orm.updateOne("burgers", burgerData, criteria, (res) => {
      cb(res);
    });
  },
};

// Export the database functions for the controller (catsController.js).
module.exports = cat;
