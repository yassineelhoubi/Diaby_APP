import * as yup from 'yup';

export const signInInitValues = {
    email: '',
    password: '',
}

export const signInSchemaValidation = yup.object().shape({
    email: yup.string().email().required("Email is required"),
    password: yup.string().min(5, "Password must be at least 5 characters").required("Password is required"),
});

export const signUpInitValues = {
    email: '',
    password: '',
    fName: '',
    lName: '',
    diabetesType: '',
}

export const signUpSchemaValidation = yup.object().shape({
    email: yup.string().email("Email is invalid").required("Email is required"),
    password: yup.string().min(5, "Password must be at least 5 characters").required("Password is required"),
    fName: yup.string().required("First name is required"),
    lName: yup.string().required("Last name is required"),
    diabetesType: yup.string().required("Diabetes type is required")
});
