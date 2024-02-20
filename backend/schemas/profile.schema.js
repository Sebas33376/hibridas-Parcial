import yup from "yup";

const profile = yup.object({
  name: yup.string().trim().required(),
  lastname: yup.string().trim().required(),
  email: yup.string().trim().required().email(),
  nationality: yup.string().trim().required(),
  profile_img: yup.string().trim().url().required(),
});

const profilePatch = yup.object({
  avatar: yup.string().trim().url().required(),
  country: yup.string().trim().required(),
  email: yup.string().trim().required().email(),
  history: yup.array(),
});

export { profile, profilePatch };
