const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Subscriber extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Subscriber.hasMany(models.Topic, { foreignKey: 'topicId', as: 'topic', });
    }
  }
  Subscriber.init({
    url: DataTypes.STRING,
    topicId: { type: DataTypes.UUID, allowNull: false, foreignKey: true, references: {model: 'Topic'} },

  }, {
    sequelize,
    modelName: 'Subscriber',
  });
  return Subscriber;
};