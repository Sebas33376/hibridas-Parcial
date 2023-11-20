import yup from "yup";

const profile = yup.object({
    avatar:yup.string().trim().url().required(),
    country:yup.string().trim().required(),   
    email:yup.string().trim().required().email(),   
    phoneNumber:yup.string().trim().required().min(10),
    history:yup.array()

})

export {
    profile
}