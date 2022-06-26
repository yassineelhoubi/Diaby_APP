import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { signUpInitValues, signUpSchemaValidation } from './schema'
import { PrimaryBtn } from '../../components'
import { Formik } from 'formik';
import { SignUpFields } from './SignUpFields';
import { useRegisterMutation } from '../../app/features/user/user.api';
import { Snackbar } from 'react-native-paper';

const SignUpForm = () => {
    const [register] = useRegisterMutation();
    const [showSnackbar, setShowSnackbar] = useState(false);
    return (
        <>
            <Formik
                initialValues={signUpInitValues}
                validationSchema={signUpSchemaValidation}
                onSubmit={(values, actions) => {
                    register(values).then(res => {
                        if (!res.data.error) {
                            return navigation.push('Root')
                        }
                        setShowSnackbar(true)
                        console.log("z")
                    }
                    ).catch(err => {
                        console.log(err)
                    })
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
            <Snackbar
                style={{ backgroundColor: 'red' }}
                visible={showSnackbar}
                onDismiss={() => setShowSnackbar(false)}
                action={{
                    label: 'Undo',
                    onPress: () => {
                        // Do something
                    },
                }}>
                Invalid credentials
            </Snackbar>
        </>

    )
}

export { SignUpForm }

const styles = StyleSheet.create({
    LoginBtn: {
        width: '80%',
        paddingVertical: 12
    }
})