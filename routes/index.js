<!--index finished for routes-->
var express = require('express');
var router = express.Router();

let profiles = [];

router.get('/', function(req, res) {
    res.render('index');
});

router.get('/calculator', function(req, res) {
    res.render('calculator', { result: null });
});

router.post('/calculator', function(req, res) {

    const name = req.body.name;
    const weight = parseFloat(req.body.weight);
    const goal = req.body.goal;

    let calories = Math.round(weight * 30);

    profiles.push({
        name: name,
        goal: goal,
        calories: calories
    });

    res.render('calculator', {
        result: calories
    });
});

router.get('/dashboard', function(req, res) {
    res.render('dashboard', {
        profiles: profiles
    });
});

module.exports = router;

