import * as service from "../../services/auth.services.js";
import * as tokenService from "../../services/token.services.js";
import * as profileService from "../../services/profile.services.js";

const addAccount = async (req, res) => {
  return service
    .addAccount(req.body)
    .then(() => res.status(201).json({ msg: "Cuenta creada" }))
    .catch((err) => res.status(401).json({ error: { msg: err.msg } }));
};

const login = async (req, res) => {
  return service
    .login(req.body)
    .then(async (account) => {
      return { token: await tokenService.createToken(account), account };
    })
    .then((auth) => res.status(201).json(auth))
    .catch((err) => res.status(401).json({ error: { message: err.message } }));
};

const logOut = async (req, res) => {
  const token = req.headers["auth-token"];
  return tokenService
    .logOut(token)
    .then(() => res.status(200).json({ message: "Sesión cerrada" }))
    .catch((err) => res.status(401).json({ error: { message: err.message } }));
};

const addProfile = async (req, res) => {
  return profileService
    .addProfile(req.account, req.body)
    .then(() => res.status(201).json({ message: "Perfil creado" }))
    .catch((err) => res.status(401).json({ error: { message: err.message } }));
};

const getProfile = async (req, res) => {
  return profileService
    .getProfile(req.account._id)
    .then((profile) => res.status(201).json(profile))
    .catch((err) =>
      res.status(401).json({ message: { message: err.message } })
    );
};

export { addAccount, login, logOut, addProfile, getProfile };
