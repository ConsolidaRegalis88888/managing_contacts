const Router = require('express');
const router = new Router();

const contactsRouter = require('./contactsRouter');

router.use('/contacts', contactsRouter);

module.exports = router;