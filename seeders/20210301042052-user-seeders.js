"use strict";
const bcrypt = require("bcrypt");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert("users", [
      {
        name: "Noor Qidam",
        profession: "Web Developer",
        role: "admin",
        email: "noorqidam@gmail.com",
        password: await bcrypt.hash("Aguero20", 10),
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: "United Tractors",
        profession: "Frontend Developer",
        role: "student",
        email: "qidam@unitedtractors.com",
        password: await bcrypt.hash("unitedtractors", 10),
        created_at: new Date(),
        updated_at: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("users", null, {});
  },
};
