import * as schema from "../schemas/teams.schema.js";

function validateTeam(req, res, next) {
    schema.teamSchema.validate(req.body, { abortEarly: false })
        .then(team => {
            req.body = team;
            next();
        })
        .catch(err => res.status(400).json({ errors: err.errors }));
}

function validateTeamPatch(req, res, next) {
    schema.teamSchemaPatch.validate(req.body, { abortEarly: false })
        .then(team => {
            req.body = team;
            next();
        })
        .catch(err => res.status(400).json({ errors: err.errors }));
}

export {
    validateTeam,
    validateTeamPatch
};
