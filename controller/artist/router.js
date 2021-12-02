const express = require('express');
const list = require('./list');
const get = require ('./get');
const remove = require('./remove');
const update = require('./update');
const create = require('./create');

const router = express.Router({mergeParams: true});

router.get('/', list);
router.post('/', create);
router.get('/:id', get);
router.put('/:id', update);
router.delete('/:id', remove);


module.exports = router;