import yup from "yup"

const account = yup.object({
    userName: yup.string().trim().required().min(6),
    password: yup.string().required().min(6)
})

export {
    account
}