import { StyleSheet, Text, View, Button, SafeAreaView, StatusBar } from 'react-native'
import React from 'react'
import { BackBtn } from '../../components'
import { AuthHeader, SignUpForm } from '../../modules/auth'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

const SignUpScreen = ({ navigation }) => {
    return (
        <>
            <BackBtn onPress={() => navigation.goBack()} />
            <SafeAreaView style={styles.container}>
                <KeyboardAwareScrollView  >
                    <AuthHeader title="Register" subTitle="Enter your credentials to register" />
                    <SignUpForm navigation={navigation} />
                </KeyboardAwareScrollView >
            </SafeAreaView>
        </>
    )
}

export { SignUpScreen }

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        paddingTop:40,
        padding: 25
    },
})