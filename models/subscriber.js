const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class subscriber extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      subscriber.hasMany(models.topic_subscriber, { foreignKey: 'subscriberId', as: 'subscribers' });
    }
  }
  subscriber.init({
    url: {type: DataTypes.STRING, unique: true}
  }, {
    sequelize,
    modelName: 'subscriber',
  });
  return subscriber;
};