import * as joi from 'joi';

export const joiValidationSchema = joi.object({
  MONGODB_URI: joi.required(),
});
