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
      Topic.hasMany(models.Subscriber, { foreignKey: 'topicId' });
      // Topic.hasMany(models.Subscriber, { foreignKey: 'topicId', as: 'topic', });
    }
  }
  Topic.init({
    topic: DataTypes.STRING,
    slug: { type: DataTypes.STRING, unique: true }
  }, {
    sequelize,
    modelName: 'Topic',
  });
  return Topic;
};