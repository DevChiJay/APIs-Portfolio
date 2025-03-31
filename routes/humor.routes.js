const express = require('express');

const humorController = require('../controllers/humor.controller');

const router = express.Router();

router.get('/', humorController.getAllNew);

router.get('/all', humorController.getAllHumors);

router.get('/random', humorController.getRandomHumor);

router.post('/new/add-humor', humorController.addHumor);

router.post('/store/:id', humorController.saveHumor);

router.delete('/delete/pending/:id', humorController.removePendingHumor);

module.exports = router;
