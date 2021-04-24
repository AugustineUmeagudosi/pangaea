const express = require('express');
const router = express.Router();
const subscriberService = require('./service');

// create organization
router.post( '/',  subscriberService.create );

module.exports = router;