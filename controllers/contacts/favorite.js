const Contact = require("../../models/contact");
const {HttpError} = require("../../helpers");
const {updateFavoriteSchema} = require("../../schemas/contacts");

const favorite = async (req, res, next) => {
    try {
        const { error } = updateFavoriteSchema.validate(req.body);
        if (error) {
            throw HttpError(400, "missing field favorite");
        }
        const { id } = req.params;

        const result = await Contact.findByIdAndUpdate(id, req.body, { new: true });

        if (!result) {
            throw HttpError(404, "Not found")

        }
        res.json(result)
    }
    catch (error) {
        next(error)
    }
};
module.exports = favorite;