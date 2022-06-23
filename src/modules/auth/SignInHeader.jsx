import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { COLORS } from '../../constants/theme'

const SignInHeader = () => {
    return (
        <View style={styles.headerContainer}>
            <Image source={require('./../../../assets/diaby-logos.png')} style={styles.logo} />
            <Text style={styles.title} >Login</Text>
            <Text style={styles.desc} >Enter your login details to access your account</Text>
        </View>
    )
}

export { SignInHeader }

const styles = StyleSheet.create({
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
        textAlign: 'center',
        marginBottom: 20
    },
})