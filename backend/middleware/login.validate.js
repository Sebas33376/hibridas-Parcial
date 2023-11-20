import * as profileSchema from "../schemas/profile.schema.js"

async function validateProfile(req, res, next) {
    return profileSchema.profile.validate(req.body, {abortEarly: false , stripUnknown: true})
    .then( account => {
        req.body = account
        next()
    } )
    .catch(err => res.status(400).json({error: {message: err.message}}))
} 

export {
    validateProfile
}