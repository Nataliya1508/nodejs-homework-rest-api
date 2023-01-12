const Joi = require("Joi");
const { Schema } = require("mongoose");


const emailRegexp = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

const joiRegisterSchema = Joi.object({
  name: Joi.string().required(),
  password: Joi.string().min(6).required(),
  email: Joi.string().pattern(emailRegexp).required(),
  owner: Joi.string().required(),
});

const joiLoginSchema = Joi.object({
  email: Joi.string().pattern(emailRegexp).required(),
  password: Joi.string().min(6).required(),
  owner: Joi.string().required(),
});


const subscriptionSchema = Joi.object({
  subscription: Joi.string().valid("starter", "pro", "business").required(),
  
})



const userSchema = new Schema(
  {

    password: {
        type: String,
        required: [true, 'Password is required'],
        minlength: 6,
    },
    email: {
        type: String,
      required: [true, 'Email is required'],
      match: emailRegexp,
      unique: true,
    },
    subscription: {
        type: String,
        enum: ["starter", "pro", "business"],
        default: "starter"
    },
    token: {
        type: String,
        default: null,
    },
    owner: {
        type: SchemaTypes.ObjectId,
        ref: 'user',
    },
    avatarURL: {
      type: String,
      required: true,
    },

}, { versionKey: false, timestamps: true });



const userSchemas = {
  joiRegisterSchema,
  userSchema,
  joiLoginSchema,
  subscriptionSchema,
}

module.exports = userSchemas;