const { celebrate, Segments, Joi } = require("celebrate");

module.exports = {
    create: celebrate({
        [Segments.BODY]: Joi.object().keys({
            user_id: Joi.string().required(),
            nome: Joi.string().required(),
            pais: Joi.string().required(),
            preco: Joi.string().required(),
            intinerario: Joi.string().required(),
        }),
    }),
    getByLocal: celebrate({
        [Segments.PARAMS]: Joi.object().keys({
            usuarioId: Joi.string().required(),
            localId: Joi.string().required(),
        }),
    }),
    update: celebrate({
        [Segments.PARAMS]: Joi.object().keys({
            localId: Joi.string().required(),
        }),
        [Segments.BODY]: Joi.object().keys({
            user_id: Joi.string().required(),
            nome: Joi.string().required(),
            pais: Joi.string().required(),
            preco: Joi.string().required(),
            intinerario: Joi.string().required(),
        }).min(1),
    }),
    delete: celebrate({
        [Segments.PARAMS]: Joi.object().keys({
            localId: Joi.string().required(),
        }),
    })
};