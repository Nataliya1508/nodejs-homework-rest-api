const bcrypt = require("bcrypt");


const { User } = require("../../models");
const { HttpError } = require("../../helpers");


const signup = async (req, res) => {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (!user) {
        throw HttpError(409, "Email in use")
    }
    const hashPassword = await bcrypt.hash(password, 10);

    const newUser = await User.create({ ...req.body, password: hashPassword });

    res.status(201).json({
        user: {
            name: newUser.name,
            email: newUser.email,
            subscription: newUser.subscription,
        },
       
    });
};

module.exports = signup;