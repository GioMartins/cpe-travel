const firebase = require("../utils/firebase");
const UserModel = require("../models/UsuarioModels");
const jwt = require("jsonwebtoken");

module.exports = {
    async signIn(req, res){
        try {
            //const { email, password } = req.body;
            const email = req.body.email;
            const senha = req.body.senha;

            let firebaseId;
            try {
                firebaseId = await firebase.login(email, senha);
            } catch (error) {
                console.warn(error);
                return res.status(403).send("Login não autorizado: email ou senha incorretos!");
            }
            const usuario = await UserModel.getByFields({ firebase_id: firebaseId });

            const accessToken = jwt.sign({ usuario }, process.env.ACCESS_TOKEN_SECRET, { 
                expiresIn: "30d",
             });

            return res.status(200).json({ usuario, accessToken });
            
        } catch (error) {
            console.warn(error);
            return res
                .status(500)
                .send("Internal server error while attempting to validade credentials.");
        }    
    }
};