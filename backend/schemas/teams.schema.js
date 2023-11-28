import yup from "yup";

const teamSchema = yup.object({
    name: yup.string().required(),
    img: yup.string().required(),
    sport: yup.string().required(),
    joins: yup.array().of(yup.number().required()),
    place: yup.string().required(),
    date: yup.string().required(),
    hour: yup.string().required(),
    description: yup.string().required(),
    skills_level: yup.string().required(),
    gender: yup.string().required(),
    organizer_id: yup.string().required(),
});

const teamSchemaPatch = yup.object({
    name: yup.string().required(),
    img: yup.string().required(),
    sport: yup.string().required(),
    joins: yup.array().of(yup.number().required()),
    place: yup.string().required(),
    date: yup.string().required(),
    hour: yup.string().required(),
    description: yup.string().required(),
    skills_level: yup.string().required(),
    gender: yup.string().required(),
    organizer_id: yup.string(),
});

export {
    teamSchema,
    teamSchemaPatch
}