import * as service from "../../services/proyectsClients.services.js"


const getProyectsByClient = (req, res) => {

    const client = req.query;

    service.updateClientProyects(client)
        .then(client => res.status(201).json(client))
        .catch(err => res.status(404).json())

    service.getProyectsByClient(client)
        .then(client => res.status(200).json(client))
        .catch(err => res.status(404).json())
}

export {
    getProyectsByClient
}