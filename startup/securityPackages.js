const helmet = require('helmet');
const compression = require('compression');
const cors = require('cors');
const rateLimit = require("express-rate-limit");

const limiter = rateLimit({
    windowMs: 60 * 60 * 1000, // 1 hr
    max: 500, // limit each IP to 500 requests per windowMs
    message: "Too many requests made from this IP, please try again after an hour"
});


module.exports= function (publisher, subscriber) {
    publisher.use(cors());
    subscriber.use(cors());
    publisher.use(limiter);
    subscriber.use(limiter);
    publisher.use(helmet());
    subscriber.use(helmet());
    publisher.use(compression());
    subscriber.use(compression());
};