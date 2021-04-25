const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Topic extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Topic.hasMany(models.Topic_Subscriber, { foreignKey: 'topicId', as: 'topics' });
      Topic.hasMany(models.Message, { foreignKey: 'topicId', as: 'topicsMessages' });
    }
  }
  Topic.init({
    topic: { type: DataTypes.STRING, unique: true }
    // slug: { type: DataTypes.STRING, unique: true }
  }, {
    sequelize,
    modelName: 'Topic',
  });
  return Topic;
};