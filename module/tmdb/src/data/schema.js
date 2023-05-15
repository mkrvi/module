import * as yup from "yup";

export const loginSchema = yup
    .object({
            username: yup.string().matches(/^[a-z][a-zA-Z\d_.]*$/).required(),
            password: yup.string().required('Password is required'),
    })
    .required();

export const registerSchema = yup
    .object({
            firstName: yup.string().matches(/^[A-Za-z]+$/, 'Allowed only en letters').required(),
            lastName: yup.string().matches(/^[A-Za-z]+$/, 'Allowed only en letters').required(),
            email: yup.string().nullable().email().matches(/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/, 'Enter valid email').required(),
            username: yup.string().matches(/^[a-z][a-zA-Z\d_.]*$/, 'Enter valid username').required(),
            password: yup.string().required('Password is required'),
            passwordConfirmation: yup.string()
                .oneOf([yup.ref('password'), null], 'Passwords must match'),
            birthDay: yup.string().required(),
    })
    .required();