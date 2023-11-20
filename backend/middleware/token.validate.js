import * as service from "../services/token.services.js"

async function validateToken(req, res, next) {
    const token = req.headers["auth-token"]
    console.log(token);

    if (!token) {
        return res.status(401).json({error:{message:"token no enviado"}});
    }

    const account = await service.validateToken(token)

    if (!account) {
        return res.status(401).json({error:{message:"token no autorizado"}});
    }

    req.account = account;

    next()
}

export {
    validateToken
}