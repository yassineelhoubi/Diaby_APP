import { StyleSheet, Text, View, SafeAreaView, Image } from 'react-native'
import React from 'react'
import { SignInForm } from '../../modules/auth';
import { COLORS } from '../../constants/theme';

const SignInScreen = ({ navigation }) => {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.headerContainer}>
                <Image source={require('./../../../assets/diaby-logos.png')} style={styles.logo} />
                <Text style={styles.title} >Login</Text>
                <Text style={styles.desc} >Enter your login details to access your account</Text>
            </View>
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
        padding: 25
    },
    headerContainer: {
        height: 200,
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    logo: {
        width: 100,
        height: 100,
    },
    title: {
        color: COLORS.primaryText,
        fontWeight: 'bold',
        fontSize: 20,
        letterSpacing: 2
    },
    desc: {
        color: COLORS.secondaryText,
        fontSize: 15,
        letterSpacing: 1,
        textAlign: 'center'
    },
})