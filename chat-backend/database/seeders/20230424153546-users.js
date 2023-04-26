'use strict';
const bcrypt = require("bcrypt")

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

        await queryInterface.bulkInsert('Users', [
            {
                firstName: 'John',
                lastName: 'Doe',
                email: 'john@test.com',
                password: bcrypt.hashSync('secret', 10),
                gender: 'male',
            }, {
                firstName: 'Jane',
                lastName: 'Doe',
                email: 'jane@test.com',
                password: 'secret',
                gender: 'female',
            }, {
                firstName: 'Sam',
                lastName: 'Smith',
                email: 'sam.smith@test.com',
                password: 'secret',
                gender: 'male',
            }
        ]);
    },

    async down(queryInterface, Sequelize) {
        /**
         * Add commands to revert seed here.
         *
         * Example:
         * await queryInterface.bulkDelete('People', null, {});
         */
        await queryInterface.bulkDelete('Users', null, {});
    }
};
