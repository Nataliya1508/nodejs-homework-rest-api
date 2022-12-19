const express = require('express');

const controllers = require("../../controllers/contacts");

const { isValidId } = require("../../middlewares/isdValidId");

const router = express.Router();



router.get('/', controllers.listContacts);

router.get('/:contactId', isValidId, controllers.getById);

router.post('/', controllers.add);

router.delete('/:contactId', isValidId, controllers.removeById);

router.put('/:contactId', isValidId, controllers.updateById);

router.putch('/:contactId/favorite', isValidId, controllers.favorite);



module.exports = router;
