import { StyleSheet, View, Alert, Keyboard } from 'react-native'
import React, { useEffect } from 'react'
import { Formik } from 'formik';
import { Button } from 'react-native-paper';
import * as Yup from 'yup';
import { SignInFields } from './SignInFields';
import { signInInitValues, signInSchemaValidation } from './schema';
import { PrimaryBtn } from '../../components';
import tw from 'twrnc'
import { useLoginMutation } from '../../app/features/user/user.api';
import { Snackbar } from 'react-native-paper';

const SignInForm = ({ navigation }) => {
    const [login, {isLoading}] = useLoginMutation();
    const [showSnackbar, setShowSnackbar] = React.useState(false);
    return (
        <>
            <Formik
                initialValues={signInInitValues}
                validationSchema={signInSchemaValidation}

                onSubmit={values => {
                    login(values).then(res => {
                        if (!res.data.error) {
                            return navigation.push('Root')
                        }
                        setShowSnackbar(true)

                    }).catch(err => {
                        console.log(err)
                    });
                }
                }>
                {({ handleChange, handleSubmit, handleBlur, values, errors, touched }) => (
                    <View>
                        <SignInFields handleChange={handleChange} handleBlur={handleBlur} values={values} errors={errors} touched={touched} />
                        <PrimaryBtn title="LOG IN" onPress={handleSubmit} disabled={isLoading} style={styles.LoginBtn} />
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

export { SignInForm }

const styles = StyleSheet.create({
    LoginBtn: {
        width: '80%',
        paddingVertical: 12
    }
})