import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { COLORS } from '../constants/theme'
import { PrimaryBtn } from '../components'
import { AuthFooter } from '../modules/auth'

const WelcomeScreen = ({ navigation }) => {
    return (

        <SafeAreaView style={styles.container}>
            <View style={styles.headerContainer}>
                <Image source={require('./../../assets/diaby-logos.png')} style={styles.logo} />
                <Text style={styles.title} >Diaby Welcome You</Text>
                <Text style={styles.desc} >Diaby is a platform that helps you to Track your diabetes status </Text>
            </View>
            <View>
                <Image source={require('./../../assets/png/Doctor.png')} style={styles.bodyImage} />
                <PrimaryBtn title="Get Started" onPress={() => navigation.push("SignIn")} />
                <AuthFooter text={'Don\'t have an account?'} actionName={'Sign In'} onPress={() => navigation.push('SignUp')} />
            </View>
        </SafeAreaView>
    )
}

export { WelcomeScreen }

const styles = StyleSheet.create({
    container: {
        padding: 20,
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'space-around',
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
    bodyImage: {
        height: 300,
        marginBottom: 20,
        alignSelf: 'center',
    },

})