import * as yup from 'yup';

export const signInInitValues = {
    email: '',
    password: '',
}

export const signInSchemaValidation = yup.object().shape({
    email: yup.string().email().required("Email is required"),
    password: yup.string().min(5, "Password must be at least 5 characters").required("Password is required"),
});
