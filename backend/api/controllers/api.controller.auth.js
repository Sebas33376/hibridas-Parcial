import * as service from "../../services/auth.services.js";
import * as tokenService from "../../services/token.services.js";
import * as profileService from "../../services/profile.services.js";

const addAccount = async (req, res) => {
  try {
    await service.addAccount(req.body);
    res.status(201).json({ msg: "Cuenta creada" });
  } catch (err) {
    res.status(401).json({ error: { msg: err.msg } });
  }
};

const login = async (req, res) => {
  try {
    const account = await service.login(req.body);
    const token = await tokenService.createToken(account);
    res.status(201).json({ token, account });
  } catch (err) {
    res.status(401).json({ error: { message: err.message } });
  }
};

const logOut = async (req, res) => {
  try {
    const token = req.headers["auth-token"];
    await tokenService.logOut(token);
    res.status(200).json({ message: "Sesión cerrada" });
  } catch (err) {
    res.status(401).json({ error: { message: err.message } });
  }
};

const addProfile = async (req, res) => {
  try {
    await profileService.addProfile(req.account, req.body);
    res.status(201).json({ message: "Perfil creado" });
  } catch (err) {
    res.status(401).json({ error: { message: err.message } });
  }
};

const getProfile = async (req, res) => {
  try {
    const profile = await profileService.getProfile(req.account._id);
    res.status(201).json(profile);
  } catch (err) {
    res.status(401).json({ error: { message: err.message } });
  }
};

const editProfile = async (req, res) => {
  try {
    const profile = await profileService.editProfile(req.account._id);
    res.status(201).json(profile);
  } catch (err) {
    res.status(401).json({ error: { message: err.message } });
  }
};

export { addAccount, login, logOut, addProfile, getProfile, editProfile };