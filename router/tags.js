const router = require('express').Router();
let tags = require('../models/tags.model');

router.route('/').get((req, res) => {
  tags.find()
    .then(tag => res.json(tag))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
  const name = req.body.name;
  const newTags = new tags({
    name
  });
  newTags.save()
    .then(() => res.json('tags added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});




module.exports = router;