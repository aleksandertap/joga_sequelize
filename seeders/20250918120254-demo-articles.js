"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
    await queryInterface.bulkInsert(
      "Articles",
      [
        {
          name: "Introduction to Ashtanga",
          slug: "introduction-to-ashtanga",
          image: "ashtanga.jpg",
          body: "<p>Introduction to Ashtanga is a dynamic and physically demanding practice that synchronizes breath with movement.</p>",
          published: "2020-01-08 15:02:30",
          author_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Morning vinyasa flow routine ",
          slug: "morning-vinyasa-flow-routine",
          image: "morning.jpg ",
          body: "<p>Blash lashasddas lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>",
          published: "2020-04-14 15:02:41 ",
          author_id: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Secrets Of A Yoga Teacher",
          slug: "secrets-of-a-yoga-teacher",
          image: "yoga-teacher.jpg ",
          body: "<p>lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>",
          published: "2020-01-08 15:02:30",
          author_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    return queryInterface.bulkDelete("Articles", null, {});
  },
};
