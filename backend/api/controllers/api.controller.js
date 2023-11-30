import * as service from "../../services/services.js"

const getTeams = (req, res) => {

    const filter = req.query;

    service.getTeams(filter)
        .then(teams => res.status(200).json(teams))
        .catch(err => res.status(404).json({err}))
}

const getTeamById = (req, res) => {
    const id = req.params.id;
    service.getTeamById(id)
        .then(team => {
            if (team) {
                res.status(200).json(team);
            } else {
                res.status(404).json();
            }
        })
}

const addTeam = (req, res) => {

    service.createTeam(req.body)
        .then(newTeam => {
            res.status(201).json(newTeam);
        })
        .catch(err => res.status(500).json({err}));
}

const replaceTeam = (req, res) => {
    const id = req.params.id;

    service.replaceTeam(id, team)
        .then(teamReplaced => {
            if (teamReplaced) {

                res.status(201).json(teamReplaced);

            } else {

                res.status(500).json();

            }
        })
}

const editTeam = (req, res) => {
    const id = req.params.id;
    const team = req.body;

    service.editTeam(id, team)
        .then(newTeam => {
            if (newTeam) {

                res.status(201).json(newTeam);

            } else {

                res.status(500).json();

            }
        })
}

const deletTeam = (req, res) => {
    const id = req.params.id;
    service.deletTeam(id)
        .then(team => res.status(202).json(team))
        .catch((err) => res.status(204).json({err}))

}

const getMyTeams = (req, res) => {
    const id = req.params.id;

    service.getMyTeams(id)
        .then(myTeams => {
            if (myTeams) {
                res.status(200).json(myTeams);
            } else {
                res.status(404).json();
            }
        })
}

export {
    getTeams,
    getTeamById,
    addTeam,
    editTeam,
    replaceTeam,
    deletTeam,
    getMyTeams
}