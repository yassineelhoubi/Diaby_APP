import { StyleSheet, Text, View, Alert, Keyboard, SafeAreaView } from 'react-native'
import React from 'react'
import { Formik } from 'formik';
import { Button, TextInput, Appbar } from 'react-native-paper';
import * as Yup from 'yup';
import { COLORS } from '../../constants/theme';
import { SignInForm } from '../../modules/auth';

const SignInScreen = ({ navigation }) => {
    return (
        <SafeAreaView style={styles.container}>
            <SignInForm />
        </SafeAreaView>
    )
}

export { SignInScreen }

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        // alignItems: 'center',
        justifyContent: 'center',
        padding: 20
    }
})