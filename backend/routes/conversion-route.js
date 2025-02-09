const express = require('express');
const { unitConverter } = require('../controllers/conversion-controller');

const router = express.Router();

router.post('/convert', unitConverter);


module.exports = router;