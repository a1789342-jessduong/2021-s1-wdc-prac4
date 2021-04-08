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

var counter = 0;
var colourz = ["Red","Yellow","Green","Blue"];

router.get('/color.html', function(req, res) {
    res.send(`
    <DOCTYPE! html>
    <html lang="en">

    <h1 style = 'color:${colourz[counter]}'>${colourz[counter]}</h1>

    </html>


    `);


    if (counter == 3){
        counter = 0;
    } else {
    counter++;
    }


});




/* GET log page. */


/*var currentTime = "";

router.get('/log.html', function(req, res) {

    currentTime = currentTime + "<br>" + (new Date().toString());
    res.send(currentTime);
});*/




module.exports = router;

