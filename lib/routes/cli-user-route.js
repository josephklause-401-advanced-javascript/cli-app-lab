const router = require('express').Router();
const CliUser = require('../models/cliUsers');

router
  .post('/', (req, res, next) => {
    CliUser.create(req.body)
      .then(cliUser => res.json(cliUser))
      .catch(next);
  })

  .get('/', (req, res, next) => {
    CliUser.find()
      .then(cliUsers => res.json(cliUsers))
      .catch(next);
  })
  .put('/:id', ({ params, body }, res, next) => {
    CliUser.findByIdAndUpdate(params.id, body, { new: true })
      .then(cliUser => res.json(cliUser))
      .catch(next);
  });

module.exports = router;