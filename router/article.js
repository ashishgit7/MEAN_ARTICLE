const router = require('express').Router();
let article = require('../models/article.model');

router.route('/').get((req, res) => {
    article.find()
    .then(exercises => res.json(exercises))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
  const desc = req.body.desc;
  const header = req.body.header;
  const tags = req.body.tags;

  const newArticle = new article({
    desc,
    header,
    tags
  });
  newArticle.save()
  .then(() => res.json('Article added!'))
  .catch(err => res.status(400).json('Error: ' + err));
});


router.route('/update/:id').post((req, res) => {
    article.findById(req.params.id)
    .then(article => {
        article.desc = req.body.desc;
        article.header = req.body.header;
        article.tags = req.body.tags;
        
        
        article.save()
        .then(() => res.json('article updated!'))
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/update/:id').post((req, res) => {
  article.findById(req.params.id)
  .then(articledata => {
    articledata.desc = req.body.desc;
    articledata.header = req.body.header;
    articledata.tags = req.body.tags;
    
    article.save()
    .then(() => res.json('article updated!'))
    .catch(err => res.status(400).json('Error: ' + err));
  })
  .catch(err => res.status(400).json('Error: ' + err));
});
module.exports = router;

