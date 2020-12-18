const { celebrate, Segments, Joi } = require("celebrate");

module.exports = {
    login: celebrate({
        [Segments.BODY]: Joi.object().keys({
            email: Joi.string().email().required(),
            senha: Joi.string().required(),
        }),
        [Segments.HEADERS]: Joi.object().keys({
            authorization: Joi.string().required()
        }).unknown(),
    }),
};