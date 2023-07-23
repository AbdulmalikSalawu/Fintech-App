import * as Yup from 'yup'
        
const passwordRules = /^(?=.*\d)(?=.*[a-z]).{5,}$/;

export const basicSchema = Yup.object().shape({
    email: Yup.string().email("Please enter a valid email").required("Required"),
    password: Yup
        .string()
        .min(6)
        .matches(passwordRules, "must include a letter and a number")
        .required("Required"),
})
