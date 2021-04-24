// const express = require('express');

// const publisher = express();
// const subscriber = express();

// posts.listen(9000, () => {
//   console.log(`publisher listening on port 9000`);
// });

// subscribers.listen(8000, () => {
//   console.log(`Subscribers listening on port  8000`);   
// });

const express  = require('express');
require('dotenv').config();
const port = process.env.PORT;

const publisher = express();
const subscriber = express();

require('./startup/securityPackages')(publisher, subscriber);
require('./startup/db_connection')();
require('./startup/router')(publisher, subscriber);
require('./startup/pageNotFound')(publisher, subscriber);

publisher.listen(process.env.PUBLISHER_PORT, () => console.log(`Publisher server listening on port ${process.env.PUBLISHER_PORT}...`));
subscriber.listen(process.env.SUBSCRIBERS_PORT, () => console.log(`Subscriber server listening on port ${process.env.SUBSCRIBERS_PORT}...`));