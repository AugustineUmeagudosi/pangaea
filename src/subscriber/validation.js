const Joi = require('@hapi/joi');

function createSubscription(subscription) {
  const schema = Joi.object().keys({
    url: Joi.string().required(),
  });

  return schema.validate(subscription);
}

module.exports = {
  createSubscription
};