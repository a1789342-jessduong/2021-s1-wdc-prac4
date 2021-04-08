var express = require('express');
var router = express.Router();

/* GET home page. */
/*router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});*/


router.get('/', function(req, res, next) {
});


/* GET last page. */
var date;


router.get('/last.txt', function(req, res) {
    res.send(date);
    date = new Date().toString();
});


/* GET color page. */
router.get('/color.html', function(req, res, next) {


});



/* GET log page. */



var currentTime = "";

router.get('/log.html', function(req, res) {

    currentTime = currentTime + "<br>" + (new Date().toString());
    res.send(currentTime);
});




module.exports = router;

