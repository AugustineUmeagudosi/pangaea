const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class message extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      message.belongsTo(models.topic, { foreignKey: 'topicId', as: 'topicMessages' });
    }
  }
  message.init({
    data: DataTypes.TEXT,
    topicId: { type: DataTypes.UUID, allowNull: false, foreignKey: true, references: {model: 'topic'} }
  }, {
    sequelize,
    modelName: 'message',
  });
  return message;
};