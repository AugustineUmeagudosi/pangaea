const express = require('express');
const publisherRouter = require('../src/publisher/router');
const subscriberRouter = require('../src/subscriber/router');

module.exports = function (publisher, subscriber) {
    publisher.use(express.json({ limit:"5mb" }));
    publisher.use(express.urlencoded({ limit:"5mb", extended: true }));

    subscriber.use(express.json({ limit:"5mb" }));
    subscriber.use(express.urlencoded({ limit:"5mb", extended: true }));

    publisher.use('/', express.Router().get("/", (req, res) => res.status(200).json({ 
        message: "hello" })
    ));

    publisher.use('/publish', publisherRouter);
    publisher.use('/subscribe', subscriberRouter);

    // subscriber.use('/subscribe', subscriberRouter);
};