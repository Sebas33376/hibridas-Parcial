import { call } from "./http.service"

function getTeams() {
   return call({uri: `teams`})
}

function getTeamsById(id) {
   return call({uri: `teams/${id}`})
}

export {
    getTeams,
    getTeamsById
}