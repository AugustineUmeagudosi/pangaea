const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Topic_Subscriber extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Topic_Subscriber.belongsTo(models.Topic, { foreignKey: 'topicId', as: 'topics' });
      Topic_Subscriber.belongsTo(models.Subscriber, { foreignKey: 'subscriberId', as: 'subscribers' });
    }
  }
  Topic_Subscriber.init({
    topicId: { type: DataTypes.UUID, allowNull: false, foreignKey: true, references: {model: 'topics'} },
    subscriberId: { type: DataTypes.UUID, allowNull: false, foreignKey: true, references: {model: 'subscribers'} }
  }, {
    sequelize,
    modelName: 'Topic_Subscriber',
  });
  return Topic_Subscriber;
};