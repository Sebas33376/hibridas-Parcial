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
    img,
    sport,
    joined,
    place,
    max,
    date,
    hour,
    description,
    skills_level,
    gender,
    organizer_id,
    direction
  } = formData;

  return call({
    uri: "teams",
    method: "POST",
    body: {
      name: name,
      img: img,
      sport: sport,
      joined: joined,
      place: place,
      max: max,
      date: date,
      hour: hour,
      description: description,
      skills_level: skills_level,
      gender: gender,
      organizer_id: organizer_id,
      direction: direction,

    },
  });
}

export { getTeams, addTeam, getTeamsById };
