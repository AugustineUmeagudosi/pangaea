const express  = require('express');
require('dotenv').config();
const port = process.env.PORT;
const app = express();

require('./startup/securityPackages')(app);
require('./startup/db_connection')();
require('./startup/router')(app);
require('./startup/pageNotFound')(app);

app.listen(port, () => console.log(`App listening on port ${port}...`));
