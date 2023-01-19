const { User } = require("../../models");
const { HttpError, sendEmail } = require("../../helpers");
const verify = require("jsonwebtoken/verify");

const resendVerifyEmail = async(req, res) => {
    const { email } = req.body;
    const user = await User.findOne({ email });
    if (!user) {
        throw HttpError(404, "missing required field email");
    }
    if (user.verify) {
        throw HttpError(400, "Bad Request");
    }
    const verifyEmail = {
        to: email,
        subject: " Verify you email",
        html: `<a target="_blank" href="${BASE_URL}/api/auth/verify/${verificationToken}">Click verify email</a>`
    };
    await sendEmail(verifyEmail);

    res.json({
        message: "Verify email resend"
    })
}



module.exports = resendVerifyEmail;