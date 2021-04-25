const Joi = require('@hapi/joi');

function createTopic(topic) {
  const schema = Joi.object().keys({
    topic: Joi.string().required()
  });

  return schema.validate(topic);
}

function publishMessage(message) {
  const schema = Joi.object().keys({
    topicId: Joi.string().required(),
    message: Joi.object().required()
  });

  return schema.validate(message);
}

module.exports = {
  createTopic, publishMessage
};