const express = require('express');
const { unitConverter } = require('../controllers/conversion-controller');

const router = express.Router();

router.post('/', unitConverter);


module.exports = router;