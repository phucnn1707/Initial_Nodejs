'use strict';

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
      'Users',
      [
        {
          firstName: 'Phuc',
          lastName: 'Nguyen',
          email: 'nguyenphuc1@gmail.com',
        },
        {
          firstName: 'Phuc',
          lastName: 'Nguyen',
          email: 'nguyenphuc2@gmail.com',
        },
        {
          firstName: 'Phuc',
          lastName: 'Nguyen',
          email: 'nguyenphuc3@gmail.com',
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
  },
};
