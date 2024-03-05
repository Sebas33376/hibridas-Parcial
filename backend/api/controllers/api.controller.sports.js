import * as service from "../../services/sport.services.js";

const getSports = (req, res) => {
    service.getSports()
        .then(sports => {
            if (sports.length === 0) {
                return res.status(404).json({ error: "No se encontraron deportes" });
            }

            res.status(200).json(sports);
        })
        .catch(err => res.status(500).json({ error: "Error al obtener deportes", details: err.message }));
};

export {
    getSports
};
