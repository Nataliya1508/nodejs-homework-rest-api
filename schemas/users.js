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

const joiEmailSchema = Joi.object({
  email: Joi.string().pattern(emailRegexp).required(),
 
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
      // type: String,
        type: SchemaTypes.ObjectId,
        ref: 'user',
    },
    avatarURL: {
      type: String,
      required: true,
    },
    
    verify: {
      type: Boolean,
      default: false,
    },

    verificationToken: {
      type: String,
    required: [true, 'Verify token is required'],
    },

}, { versionKey: false, timestamps: true });



const userSchemas = {
  joiRegisterSchema,
  userSchema,
  joiLoginSchema,
  joiEmailSchema,
  subscriptionSchema,
};

module.exports = userSchemas;