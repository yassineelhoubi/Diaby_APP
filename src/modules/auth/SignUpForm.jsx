import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { signUpInitValues, signUpSchemaValidation } from './schema'
import { PrimaryBtn } from '../../components'
import { Formik } from 'formik';
import { SignUpFields } from './SignUpFields';

const SignUpForm = () => {
    return (
        <Formik
            initialValues={signUpInitValues}
            validationSchema={signUpSchemaValidation}
            onSubmit={(values, actions) => {
                console.log(values)
            }
            }
        >
            {({ handleChange, handleSubmit, values, errors, touched }) => (
                <View>
                    <SignUpFields handleChange={handleChange} values={values} errors={errors} touched={touched} />
                    <PrimaryBtn title="REGISTER" onPress={handleSubmit} style={styles.LoginBtn} />
                </View>
            )}
        </Formik>

    )
}

export { SignUpForm }

const styles = StyleSheet.create({
    LoginBtn:{
        width:'80%',
        paddingVertical:12
    }
})