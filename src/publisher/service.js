const _ = require('lodash'),
    // dbQueries = require('./dbQueries'),
    // validate = require('./validation'),
    // responseMessages = require('../helpers/responseMessages'),
    // variables = require('../helpers/parameters'),
    // helpers = require('../helpers/utilities'),
    // mailService = require('../helpers/mailServices'),
{ v4: uuidv4 } = require('uuid');


module.exports = {
    createTopic: async (req, res) => {
        return res.send('Topic published!');
    },

    publishMessage: async (req, res) => { 
        return res.send(`${req.params.topic} message published successfully!`);
    }
};