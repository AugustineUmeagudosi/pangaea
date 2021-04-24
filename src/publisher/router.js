const express = require('express');
const router = express.Router();
const publisherService = require('./service');

// create organization
router.post( '/',  publisherService.create );

module.exports = router;