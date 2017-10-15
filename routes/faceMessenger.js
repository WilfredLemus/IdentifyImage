var express = require('express');
var router = express.Router();
const faceMessengerCtrl = require('../controllers/faceMessenger');



router.get('/', faceMessengerCtrl.verifyToken);

router.post('/', faceMessengerCtrl.processMessage);

module.exports = router;