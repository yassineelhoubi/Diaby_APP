import { StyleSheet, SafeAreaView, StatusBar } from 'react-native'
import React from 'react'
import { AuthFooter, SignInForm, SignInHeader } from '../../modules/auth';
import { BackBtn } from '../../components';


const SignInScreen = ({ navigation }) => {
    return (
        <>
            <BackBtn onPress={() => navigation.goBack()} />

            <SafeAreaView style={styles.container}>
                <SignInHeader />
                <SignInForm />
                <AuthFooter text={'Don\'t have an account?'}
                    actionName={'Sign In'}
                    onPress={() => navigation.push('SignUp')} />
            </SafeAreaView>
        </>
    )
}

export { SignInScreen }

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        marginTop: StatusBar.currentHeight,
        justifyContent: 'center',
        padding: 25
    },
})