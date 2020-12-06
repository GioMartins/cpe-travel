const { celebrate, Segments, Joi } = require("celebrate");

module.exports = {
    create: celebrate({
        [Segments.BODY]: Joi.object().keys({
            nome: Joi.string().required(),
            email: Joi.string().email().required(),
            senha: Joi.string().required(),
        }),
    }),
    getByUsuario: celebrate({
        [Segments.PARAMS]: Joi.object().keys({
            usuarioId: Joi.string().required(),
        }),
    }),
    update: celebrate({
        [Segments.PARAMS]: Joi.object().keys({
            usuarioId: Joi.string().required(),
        }),
        [Segments.BODY]: Joi.object().keys({
            nome: Joi.string().optional(),
            email: Joi.string().email().optional(),
            senha: Joi.string().optional(),
        }).min(1),
    }),
    delete: celebrate({
        [Segments.PARAMS]: Joi.object().keys({
            usuarioId: Joi.string().required(),
        }),
    })
};