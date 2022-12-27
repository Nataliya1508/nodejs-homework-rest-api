const express = require("express");

const controllers = require("../../controllers/contacts");
const { contactSchemas } = require("../../schemas");

const { isValidId } = require("../../middlewares/isdValidId");
const { validateBody } = require("../../middlewares/validateBody");
const { authenticate } = require("../../middlewares/authenticate");

const router = express.Router();



router.get('/', authenticate, controllers.listContacts);

router.get('/:contactId', authenticate, isValidId, controllers.getById);

router.post('/', authenticate, validateBody(contactSchemas.addSchema), controllers.add);

router.delete('/:contactId', authenticate, isValidId, controllers.removeById);

router.put('/:contactId', authenticate, validateBody(contactSchemas.addSchema), isValidId, controllers.updateById);

router.putch('/:contactId/favorite', authenticate, isValidId, validateBody(contactSchemas.addSchema), controllers.favorite);



module.exports = router;
