const Joi = require('joi');

const id = Joi.string().uuid();
const name = Joi.string().min(3).max(15).trim();
const price = Joi.number().integer().min(10);
const image = Joi.string().uri().trim();

const creatProductSchema = Joi.object({
  name: name.required(),
  price: price.required(),
  image: image.required(),
});

const updateProductSchema = Joi.object({
  name: name,
  price: price,
  image: image,
});

const getProductSchema = Joi.object({
  id: id.required(),
});

module.exports = { creatProductSchema, updateProductSchema, getProductSchema }
