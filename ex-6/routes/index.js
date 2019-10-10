var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
    res.render('index', { title: 'My Authentication, Authorization and MS Graph demo app (EX-5)', user: req.user });
});

module.exports = router;
