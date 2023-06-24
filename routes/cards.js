var express = require('express');
var router = express.Router();

const cardsCtrl = require('../controllers/cards');

router.get('/', cardsCtrl.index);
router.get('/new', cardsCtrl.new);
router.get('/:id/edit', cardsCtrl.edit);
router.get('/:id', cardsCtrl.show);
router.post('/', cardsCtrl.create);
router.put('/:id', cardsCtrl.update);
router.delete('/:id', cardsCtrl.delete);

module.exports = router;
