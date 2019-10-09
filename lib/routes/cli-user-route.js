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
  });

module.exports = router;