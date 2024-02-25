import * as service from "../../services/sport.services.js"

const getSports = (req, res) => {
     service.getSports()
     .then(sports => res.status(200).json(sports))
     .catch(err => res.status(404).json({err}))
}

export {
     getSports
}
