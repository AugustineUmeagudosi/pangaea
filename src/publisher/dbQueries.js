const { Sequelize, Topic, Subscriber } = require("../../models");
const Op = Sequelize.Op;
const variables = require('../helpers/parameters');

module.exports = {
    findTopic: (slug) => {
        return  Topic.findOne({ where: {slug: slug} }).catch(error => console.log(error.message));
    }
};