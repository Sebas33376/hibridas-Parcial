import * as service from "../services/services.js"
import * as utils from "../pages/utils.js"


const getProyects = (req, res) => {

    const filter = req.query;
    service.getProyects(filter)
        .then(proyects => res.send(views.createProyectsList(proyects, filter.section)))
        .catch(err => res.send(views.createError("404")))
}

const getProyectById = (req, res) => {
    const id = req.params.id;
    service.getProyectById(id)
        .then(proyect => res.send(views.createProyectById(proyect)))
        .catch(err => res.send(views.createError("404")))
}

const addProyectForm = (req, res) => {
    res.send(views.createProyectForm());
}

const addProyect = (req, res) => {

    let technologies = req.body.technologies.split(',');


    const proyect = {
        name: req.body.name,
        description: req.body.description,
        link: req.body.link,
        img: req.body.img,
        technologies: technologies,
        section: req.body.section,
        client: req.body.client
    }

    service.createProyect(proyect)
        .then(() => res.send(utils.createPageProyects(`${proyect.name}/ID:${proyect._id}`,
            `<p class="text-success text-center">El proyecto se creo con exito</p>`)))
        .catch(err => res.send(views.createError("404")))
}

const replaceProyect = (req, res) => {
    const id = req.params.id;
    let technologies = req.body.technologies.split(',');
    const proyect = {
        name: req.body.name,
        description: req.body.description,
        link: req.body.link,
        img: req.body.img,
        technologies: technologies,
        section: req.body.section,
        client: req.body.client
    }

    service.replaceProyect(id, proyect)
        .then(proyect => res.send(views.createProyect(proyect)))
        .catch(err => res.send(views.createError("404")))
}

const editProyectForm = (req, res) => {

    const id = req.params.id

    service.getProyectById(id)
        .then(proyect => res.send(views.editProyectForm(proyect)))
        .catch(err => res.send(views.createError("404")))
}

const editProyect = (req, res) => {
    const id = req.params.id;

    const proyect = {}

    let technologies = req.body.technologies.split(',');

    if (req.body.name) {
        proyect.name = req.body.name
    } else if (req.body.description) {
        proyect.description = req.body.description
    } else if (req.body.link) {
        proyect.link = req.body.link
    } else if (req.body.img) {
        proyect.img = req.body.img
    } else if (req.body.technologies) {
        proyect.technologies = technologies
    } else if (req.body.section) {
        proyect.section = req.body.section
    } else if (req.body.client) {
        proyect.client = req.body.client
    }

    service.editProyect(id, proyect)
        .then(proyect => res.send(utils.createPageProyects(`ID:${id}`,
            `<p class="text-success text-center">El proyecto se edito con exito</p>`)))
        .catch(err => res.send(views.createError("404")))
}

const deletProyectForm = (req, res) => {
    const id = req.params.id;
    service.getProyectById(id)
        .then(proyect => res.send(views.confirmProyectById(proyect)))
}

const deletProyect = (req, res) => {
    const id = req.params.id;
    service.deletProyect(id)
        .then(proyect => res.send(utils.createPageProyects(`ID:${id}`,
            `<p class="text-success text-center">El proyecto se elimino con exito</p>`)))
        .catch(err => res.send(views.createError("404")))

}

export {
    getProyects,
    getProyectById,
    addProyect,
    editProyect,
    replaceProyect,
    deletProyect,
    addProyectForm,
    editProyectForm,
    deletProyectForm
}