import * as service from "../../services/services.js";

const getTeams = (req, res) => {
  const filter = req.query;

  service
    .getTeams(filter)
    .then((teams) => res.status(200).json(teams))
    .catch((err) => res.status(404).json({ error: "Error al obtener equipos", details: err.message }));
};

const getTeamById = (req, res) => {
  const id = req.params.id;
  service
    .getTeamById(id)
    .then((team) => res.status(200).json(team))
    .catch((err) => res.status(404).json({ error: "Error al obtener equipo por ID", details: err.message }));
};

const addTeam = (req, res) => {
  service
    .createTeam(req.body)
    .then((newTeam) => res.status(201).json(newTeam))
    .catch((err) => res.status(500).json({ error: "Error al agregar equipo", details: err.message }));
};

const replaceTeam = (req, res) => {
  const id = req.params.id;

  service
    .replaceTeam(id, req.body)
    .then((teamReplaced) => res.status(201).json(teamReplaced))
    .catch((err) => res.status(500).json({ error: "Error al reemplazar equipo", details: err.message }));
};

const editTeam = (req, res) => {
  const id = req.params.id;
  const team = req.body;

  service
    .editTeam(id, team)
    .then((newTeam) => res.status(201).json(newTeam))
    .catch((err) => res.status(500).json({ error: "Error al editar equipo", details: err.message }));
};

const deleteTeam = (req, res) => {
  const id = req.params.id;

  service
    .deleteTeam(id)
    .then((team) => res.status(204).json(team))
    .catch((err) => res.status(500).json({ error: "Error al eliminar equipo", details: err.message }));
};

const getHistory = (req, res) => {
  const id = req.params.id;

  service
    .getHistory(id)
    .then((myTeams) => res.status(200).json(myTeams))
    .catch((err) => res.status(500).json({ error: "Error al obtener historial del equipo", details: err.message }));
};

export {
  getTeams,
  getTeamById,
  addTeam,
  editTeam,
  replaceTeam,
  deleteTeam,
  getHistory
};
