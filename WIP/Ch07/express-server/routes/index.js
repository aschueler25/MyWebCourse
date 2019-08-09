const express = require('express');
const moment = require('moment');

let router = express.Router();

let studentArray = [{
    nameFirst: "Devin",
    nameLast: "Durgan",
    email: "Devin.Durgan@gmail.com",
    hireDate: moment("01/19/2015", "MM/DD/YYYY")
}, {
    nameFirst: "Cristal",
    nameLast: "Adams",
    email: "Cristal.Adams@live.com",
    hireDate: moment("07/29/2016", "MM/DD/YYYY")
}, {
    nameFirst: "Nettie",
    nameLast: "McGlynn",
    email: "Nettie.McGlynn@gmail.com",
    hireDate: moment("08/29/2015", "MM/DD/YYYY")
}];



router.get("/", (req, res) => {
    res.render("index", {
        students: studentArray
    });
});

router.get("/about", (req, res) => {
	res.render("about");
});

router.get("/class", (req, res) => {
    res.render("class", {
        students: studentArray
    });
});

router.get('/weather', (req, res) => {

    let days = [ 'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    let wStr = '<h1>Weather</h1>';
    for ( let i=0; i<7; i++) {
        let hi = Math.round( Math.random() * (105 - 85) + 85 );
        let low = Math.round( Math.random() * (75 - 55) + 55 );
        wStr += `<p> ${days[i]} Low Temp: ${low}, Hi Temp: ${hi}`;
    }
    res.send( wStr );



});

module.exports = router;