import { StyleSheet, View, Alert, Keyboard } from 'react-native'
import React from 'react'
import { Formik } from 'formik';
import { Button } from 'react-native-paper';
import * as Yup from 'yup';
import { SignInFields } from './components';

const SignInForm = () => {
    return (
        <Formik
            initialValues={{ firstName: '' }}
            validationSchema={Yup.object({
                firstName: Yup.string().min(3, "First name must be at least 3 characters").required("First name is required"),
            })}

            onSubmit={values => {
                Alert.alert(JSON.stringify(values, null, 2));
                Keyboard.dismiss();
            }
            }>
            {({ handleChange, handleSubmit, values, errors, touched }) => (
                <View>
                    <SignInFields handleChange={handleChange} values={values} errors={errors} touched={touched} />
                    <Button onPress={handleSubmit} >Submit</Button>
                </View>
            )}
        </Formik>
    )
}

export { SignInForm }

const styles = StyleSheet.create({})