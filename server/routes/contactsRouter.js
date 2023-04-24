const Router = require('express');
const router = new Router();
const contactsController = require('../controllers/contactsController');

router.post('/', contactsController.create );
router.put('/:id', contactsController.editContact)
router.get('/', contactsController.getAll);
router.get('/:id', contactsController.getOne);
router.delete('/:id', contactsController.remove);

module.exports = router;
