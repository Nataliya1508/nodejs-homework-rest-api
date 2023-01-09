const { Contact } = require("../../models");

const {HttpError} = require("../../helpers");
const { contactSchemas } = require("../../schemas");

const add = async (req, res, next) => {
  try {
    const { _id: owner } = req.user;
    const { error } = contactSchemas.addSchema.validate(req.body);
    if (error) {
      throw HttpError(400, "Missing required name field");
    }
    
     const result = await Contact.create({...req.body, owner})
    res.status(201).json(result);
  }
  catch (error) {
    next(error)
  }
  
}

module.exports = add;