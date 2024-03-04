import yup from "yup";

const profile = yup.object({
  user_id: yup.string().trim().required(),
  name: yup.string().trim().required(),
  lastname: yup.string().trim().required(),
  email: yup.string().trim().required().email(),
  nationality: yup.string().trim().required(),
  profile_img: yup.string().trim().url().required(),
});

const profilePatch = yup.object({
  name: yup.string().trim().required(),
  lastname: yup.string().trim().required(),
  email: yup.string().trim().required().email(),
  nationality: yup.string().trim().required(),
  profile_img: yup.string().trim().url().required(),
});

export { profile, profilePatch };