module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('topic_subscribers', {
      id: { allowNull: false, primaryKey: true, type: Sequelize.UUID, defaultValue: Sequelize.UUIDV4 },
      topicId: { type: Sequelize.UUID, allowNull: false, foreignKey: true, references: {model: 'Topics'} },
      subscriberId: { type: Sequelize.UUID, allowNull: false, foreignKey: true, references: {model: 'Subscribers'} },
      createdAt: { allowNull: false, type: Sequelize.DATE },
      updatedAt: { allowNull: false, type: Sequelize.DATE }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('topic_subscribers');
  }
};