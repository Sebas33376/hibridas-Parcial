import * as schema from "../schemas/teams.schema.js"

function validateTeam(req, res, next) {
    schema.teamSchema.validate(req.body, { abortEarly: false, stripUnknown: true })
        .then(team => {
            req.body = team;
            next()
        })
        .catch(err => res.status(500).json(err))
}

function validateTeamPatch(req, res, next) {
    schema.teamSchemaPatch.validate(req.body, { abortEarly: false, stripUnknown: true })
        .then(team => {
            req.body = team;
            next()
        })
        .catch(err => res.status(500).json(err))
}

export {
    validateTeam,
    validateTeamPatch
}