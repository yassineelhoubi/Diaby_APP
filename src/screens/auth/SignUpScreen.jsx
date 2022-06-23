import { StyleSheet, Text, View, Button, SafeAreaView, StatusBar } from 'react-native'
import React from 'react'
import { BackBtn } from '../../components'
import { AuthHeader } from '../../modules/auth'

const SignUpScreen = ({ navigation }) => {
    return (
        <>
            <SafeAreaView style={styles.container}>
                <AuthHeader title="Register" subTitle="Enter your credentials to register" />
                <BackBtn onPress={() => navigation.goBack()} />
                <Text>SignUpScreen</Text>
                <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />
            </SafeAreaView>
        </>
    )
}

export { SignUpScreen }

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        marginTop: StatusBar.currentHeight,
        padding: 25
    },
})