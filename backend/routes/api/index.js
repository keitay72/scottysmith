// backend/routes/api/index.js
const router = require('express').Router();
const sessionRouter = require('./session.js');
const usersRouter = require('./users.js');
const chartsRouter = require('./charts.js');
const infoRouter = require('./info');

router.use('/info', infoRouter);

router.use('/charts', chartsRouter);

router.use('/session', sessionRouter);

router.use('/users', usersRouter);

module.exports = router;