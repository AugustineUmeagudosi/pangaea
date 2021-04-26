const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class topic_subscriber extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      topic_subscriber.belongsTo(models.topic, { foreignKey: 'topicId', as: 'topics' });
      topic_subscriber.belongsTo(models.subscriber, { foreignKey: 'subscriberId', as: 'subscriber' });
    }
  }
  topic_subscriber.init({
    topicId: { type: DataTypes.UUID, allowNull: false, foreignKey: true, references: {model: 'topic'} },
    subscriberId: { type: DataTypes.UUID, allowNull: false, foreignKey: true, references: {model: 'subscriber'} }
  }, {
    sequelize,
    modelName: 'topic_subscriber',
  });
  return topic_subscriber;
};