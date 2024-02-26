import { call } from "./http.service";

function getTeams() {
  return call({ uri: `teams` });
}

function getTeamsById(id) {
  return call({ uri: `teams/${id}` });
}

function addTeam({ formData }) {
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

  return call({
    uri: "teams",
    method: "POST",
    body: {
      name: name,
      sport: sport,
      joined: joined,
      max: max,
      place: place,
      date: date,
      deadline: deadline,
      hour: hour,
      description: description,
      skills_level: skills_level,
      gender: gender,
      organizer_id: organizer_id,
      direction: direction,
      state: state

    },
  });
}

export { getTeams, addTeam, getTeamsById };
