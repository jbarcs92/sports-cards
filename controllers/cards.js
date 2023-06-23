const Card = require('../models/card');

module.exports = {
    index,
    show,
    new: newCard,
    create
};

async function index(req,res) {
    try {
      const cards = await Card.find({});
      res.render('index', { cards });
    } catch (err) {
      console.log(err);
      res.render('index', { errorMsg: err.message });
    }
}

async function show(req,res) {
    try {
        const card = await Card.findById(req.params.id);
        res.render('show', { card });
    } catch (err) {
        console.log(err);
        res.render('show', { errorMsg: err.message });
    }
}

function newCard(req,res) {
    res.render('new', {errorMsg: '' });
}

async function create(req,res) {
    req.body.rookie = !!req.body.rookie;
    for (let key in req.body) {
        if (req.body[key] === '') delete req.body[key];
        }
    try {
        await Card.create(req.body);
        res.redirect('/');
    } catch (err) {
        console.log(err);
        res.render('new', { errorMsg: err.message});
    }
}

