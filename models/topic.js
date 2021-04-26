const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class topic extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      topic.hasMany(models.topic_subscriber, { foreignKey: 'topicId', as: 'topics' });
      topic.hasMany(models.message, { foreignKey: 'topicId', as: 'topicMessages' });
    }
  }
  topic.init({
    topic: { type: DataTypes.STRING },
    slug: { type: DataTypes.STRING, unique: true }
  }, {
    sequelize,
    modelName: 'topic',
  });
  return topic;
};