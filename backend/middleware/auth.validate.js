import * as schema from "../schemas/auth.schema.js"


const  validateAccount = async (req, res, next) => {
return schema.account.validate(req.body,{abortEarly: false, stripUnknown: true})
.then((account) => {
    res.body = account
    next()
})
.catch(err => res.status(400).json({error: {message: err.message}}))
}

export {
    validateAccount
}