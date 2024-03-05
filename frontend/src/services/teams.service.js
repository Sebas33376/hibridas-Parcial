import { call } from "./http.service";

function getTeams() {
  return call({ uri: `teams` });
}

function getTeamsById(id) {
  return call({ uri: `teams/${id}` });
}

async function addTeam(formData) {
  try {
    if (!formData) {
      throw new Error("formData is undefined");
    }

    console.log(formData);

    const {
      name,
      sport,
      joined,
      max,
      place,
      date,
      deadline,
      hour,
      description,
      skills_level,
      gender,
      organizer_id,
      direction,
      state
    } = formData;

    return await call({
      uri: "teams",
      method: "POST",
      body: {
        name,
        sport,
        joined,
        max,
        place,
        date,
        deadline,
        hour,
        description,
        skills_level,
        gender,
        organizer_id,
        direction,
        state
      },
    });
  } catch (error) {
    console.error("Error al agregar equipo:", error);
    throw error;
  }
}

export { getTeams, addTeam, getTeamsById };