const Contact = require("../../models/contact");
const HttpError = require("../../helpers");
const addSchema = require("../../schemas/contacts");

const updateById = async (req, res, next) => {
    try {
        const { error } = addSchema.validate(req.body);
        if (error) {
            throw HttpError(400, "Missing fields");
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
module.exports = updateById;