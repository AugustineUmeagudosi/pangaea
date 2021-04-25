const { Model} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Message extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Message.belongsTo(models.Topic, { foreignKey: 'topicId', as: 'topicsMessages' });
    }
  }
  Message.init({
    message: DataTypes.TEXT,
    topicId: { type: DataTypes.UUID, allowNull: false, foreignKey: true, references: {model: 'topics'} }
  }, {
    sequelize,
    modelName: 'Message',
  });
  return Message;
};