import * as service from "../../services/services.js";

const getTeams = (req, res) => {
  const filter = req.query;

  service
    .getTeams(filter)
    .then((teams) => res.status(200).json(teams))
    .catch((err) => res.status(404).json({ err }));
};

const getTeamById = (req, res) => {
  const id = req.params.id;
  service
    .getTeamById(id)
    .then((team) => res.status(200).json(team))
    .catch((err) => res.status(404).json({ err }));
};

const addTeam = (req, res) => {
  service
    .createTeam(req.body)
    .then((newTeam) => res.status(201).json(newTeam))
    .catch((err) => res.status(500).json({ err }));
};

const replaceTeam = (req, res) => {
  const id = req.params.id;

  service
    .replaceTeam(id, team)
    .then((teamReplaced) => res.status(201).json(teamReplaced))
    .catch((err) => res.status(500).json({ err }));
};

const editTeam = (req, res) => {
  const id = req.params.id;
  const team = req.body;

  service
    .editTeam(id, team)
    .then((newTeam) => res.status(201).json(newTeam))
    .catch((err) => res.status(500).json({ err }));
};

const deletTeam = (req, res) => {
  const id = req.params.id;

  service
    .deletTeam(id)
    .then((team) => res.status(202).json(team))
    .catch((err) => res.status(204).json({ err }));
};

const getHistory = (req, res) => {
  const id = req.params.id;

  service
    .getHistory(id)
    .then((myTeams) => res.status(202).json(myTeams))
    .catch((err) => res.status(204).json({ err }));
};

export {
  getTeams,
  getTeamById,
  addTeam,
  editTeam,
  replaceTeam,
  deletTeam,
  getHistory
};
