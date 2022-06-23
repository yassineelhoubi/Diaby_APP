import { StyleSheet, Text, View, SafeAreaView, Image } from 'react-native'
import React from 'react'
import { SignInForm, SignInHeader } from '../../modules/auth';
import { COLORS } from '../../constants/theme';
import { BackBtn } from '../../components';


const SignInScreen = ({ navigation }) => {
    return (
        <>
            <BackBtn onPress={() => navigation.goBack()} />
            <SafeAreaView style={styles.container}>
                <SignInHeader />
                <SignInForm />
            </SafeAreaView>
        </>
    )
}

export { SignInScreen }

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        // alignItems: 'center',
        justifyContent: 'center',
        padding: 25
    },

})