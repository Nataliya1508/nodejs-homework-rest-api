const express = require('express');

const controllers = require("../../controllers/auth");
const {userSchemas} = require("../../schemas")

const { authenticate } = require("../../middlewares/authenticate");
const { validateBody } = require("../../middlewares/validateBody");
const { upload } = require("../../middlewares/upload");
// const {joiRegisterSchema, joiLoginSchema} = require("../../schemas")

const router = express.Router();

router.post('/signup', validateBody(userSchemas.joiRegisterSchema), controllers.signup);

router.get('/verify/:verificationToken', controllers.verify);

router.post('/verify', validateBody(userSchemas.joiEmailSchema), controllers.resendVerifyEmail);

router.post('/login', validateBody(userSchemas.joiLoginSchema), controllers.login);

router.get('/current', authenticate, controllers.getCurrent);

router.post('/logout', authenticate, controllers.logout);

router.patch('./subscription', authenticate, validateBody(userSchemas.subscriptionSchema), controllers.subscription);

router.patch('/avatars', authenticate, upload.single("avatar"), controllers.updateAvatar);



module.exports = router;