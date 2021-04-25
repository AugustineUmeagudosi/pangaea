module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Topics', {
      id: { allowNull: false, primaryKey: true, type: Sequelize.UUID, defaultValue: Sequelize.UUIDV4 },
      topic: { type: Sequelize.STRING },
      slug: { type: Sequelize.STRING, unique: true },
      createdAt: { allowNull: false, type: Sequelize.DATE },
      updatedAt: { allowNull: false, type: Sequelize.DATE },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Topics');
  }
};