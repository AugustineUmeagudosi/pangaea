const { v4: uuidv4 } = require('uuid');

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Topics', [
      { id: uuidv4(), topic: 'topic1', createdAt: new Date(), updatedAt: new Date() }, 
      { id: uuidv4(), topic: 'topic2', createdAt: new Date(), updatedAt: new Date() }
      // { id: uuidv4(), topic: 'topic2', slug: 'topic2', createdAt: new Date(), updatedAt: new Date() }
    ]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Topics', null, {});
  }
};