const _ = require('lodash'),
    // dbQueries = require('./dbQueries'),
    // validate = require('./validation'),
    // responseMessages = require('../helpers/responseMessages'),
    // variables = require('../helpers/parameters'),
    // helpers = require('../helpers/subroutines'),
    // mailService = require('../helpers/mailServices'),
    { v4: uuidv4 } = require('uuid');


module.exports = {
    subscribe: async (req, res) => {
        return res.send(`${req.params.topic} subscribed successfully!`);
    }
};