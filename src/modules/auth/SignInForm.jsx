import { StyleSheet, View, Alert, Keyboard } from 'react-native'
import React from 'react'
import { Formik } from 'formik';
import { Button } from 'react-native-paper';
import * as Yup from 'yup';
import { SignInFields } from './components';
import { signInInitValues, signInSchemaValidation } from './schema';
import { PrimaryBtn } from '../../components';
import tw from 'twrnc'
const SignInForm = () => {
    return (
        <Formik
            initialValues={signInInitValues}
            validationSchema={signInSchemaValidation}

            onSubmit={values => {
                Alert.alert(JSON.stringify(values, null, 2));
                Keyboard.dismiss();
            }
            }>
            {({ handleChange, handleSubmit, values, errors, touched }) => (
                <View>
                    <SignInFields handleChange={handleChange} values={values} errors={errors} touched={touched} />
                    <PrimaryBtn title="LOG IN" onPress={handleSubmit} style={styles.LoginBtn} />
                </View>
            )}
        </Formik>
    )
}

export { SignInForm }

const styles = StyleSheet.create({
    LoginBtn:{
        width:'80%',
        paddingVertical:12
    }
})