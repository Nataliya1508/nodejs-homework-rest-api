const { Schema } = require('mongoose');
const Joi = require("Joi");


const addSchema = Joi.object({
  name: Joi.string().required(),
  email: Joi.string().required(),
  phone: Joi.number().required(),
  favorite: Joi.boolean(),
});

const contactSchema = new Schema({
   name: {
      type: String,
      required: [true, 'Set name for contact'],
    },
    email: {
      type: String,
    },
    phone: {
      type: String,
    },
    favorite: {
      type: Boolean,
      default: false,
    },
})

const updateFavoriteSchema = Joi.object({
  favorite: Joi.boolean().required(),
})

const contactSchemas = {
  addSchema,
  contactSchema,
  updateFavoriteSchema,
};

module.exports = contactSchemas;

// module.exports = {
//   addSchema,
//   contactSchema,
//   updateFavoriteSchema,
// };