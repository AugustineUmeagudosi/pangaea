module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Subscribers', {
      id: { allowNull: false, primaryKey: true, type: Sequelize.UUID, defaultValue: Sequelize.UUIDV4 },
      url: { type: Sequelize.STRING },
      topicId: { type: Sequelize.UUID, allowNull: false, foreignKey: true, references: {model: 'Topics'} },
      createdAt: { allowNull: false, type: Sequelize.DATE },
      updatedAt: { allowNull: false, type: Sequelize.DATE }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Subscribers');
  }
};