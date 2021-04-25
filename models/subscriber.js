const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Subscriber extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Subscriber.hasMany(models.Topic_Subscriber, { foreignKey: 'subscriberId', as: 'subscribers' });
    }
  }
  Subscriber.init({
    url: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'Subscriber',
  });
  return Subscriber;
};