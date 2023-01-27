const signup = require("./signup");
const login = require("./login");
const logout = require("./logout");
const getCurrent = require("./getCurrent");
const subscription = require("./subscription");
const updateAvatar = require("./updateAvatar");
const verify = require("./verify");
const resendVerifyEmail = require("./resendVerifyEmail");


module.exports = {
    signup,
    login,
    logout,
    getCurrent,
    subscription,
    updateAvatar,
    verify,
    resendVerifyEmail,

};