const express = require('express');

const controllers = require("../../controllers/auth");
const {userSchemas} = require("../../schemas")

const { authenticate } = require("../../middlewares/authenticate");
const { validateBody } = require("../../middlewares/validateBody");
// const {joiRegisterSchema, joiLoginSchema} = require("../../schemas")

const router = express.Router();

router.post('/signup',  validateBody(userSchemas.joiRegisterSchema), controllers.signup);

router.post('/login', validateBody(userSchemas.joiLoginSchema), controllers.login);

router.get('/current', authenticate, controllers.getCurrent);

router.get('/logout', authenticate, controllers.logout);

router.patch('./subscription', authenticate, validateBody(userSchemas.subscriptionSchema), controllers.subscription);





module.exports = router;