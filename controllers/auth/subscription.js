const { HttpError } = require('../../helpers');
const { User } = require('../../models');

const subscription = async (req, res) => {

    const { _id } = req.user;

    const result = await User.findByIdUpdate(_id, req.body, { new: true });

    if (!result) {
        throw HttpError(404, "Not found");
    }

    res.json({
        name: result.name,
        email: result.email,
        subscription: result.subscription,
    });
};

module.exports = subscription;