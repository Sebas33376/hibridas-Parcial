import yup from "yup";

const teamSchema = yup.object({
    name: yup.string().required(),
    sport: yup.string().required(),
    joined: yup.array().of(yup.string()).required(),
    max: yup.string().required(),
    place: yup.string().required(),
    date: yup.string().required(),
    deadline: yup.string().required(),
    hour: yup.string().required(),
    description: yup.string().required(),
    skills_level: yup.string().required(),
    gender: yup.string().required(),
    organizer_id: yup.string().required(),
    direction: yup.string().required(),
    state: yup.bool().required()
});

const teamSchemaPatch = yup.object({
    name: yup.string().required(),
    sport: yup.string().required(),
    joined: yup.array().of(yup.string()).required(),
    max: yup.string().required(),
    place: yup.string().required(),
    date: yup.string().required(),
    deadline: yup.string().required(),
    hour: yup.string().required(),
    description: yup.string().required(),
    skills_level: yup.string().required(),
    gender: yup.string().required(),
    organizer_id: yup.string().required(),
    direction: yup.string().required(),
    state: yup.bool().required()
});

export {
    teamSchema,
    teamSchemaPatch
}