const _ = require('lodash'),
    dbQueries = require('./dbQueries'),
    validate = require('./validation'),
    responseMessages = require('../helpers/responseMessages'),
    variables = require('../helpers/parameters'),
    helpers = require('../helpers/subroutines'),
{ v4: uuidv4 } = require('uuid');


module.exports = {
    createTopic: async (req, res) => {
        // sanitize req.body
        // check if topic exists
        // generate slug
        // generate uuid
        // save topic
        return res.send('Topic published!');
    },

    publishMessage: async (req, res) => { 
        // sanitize message data
        // check if topic exists
        // stingify message property
        // save message
        // fetch all subscribers
        // notify all subscribers
        return res.send(`${req.params.topic} message published successfully!`);
    }
};