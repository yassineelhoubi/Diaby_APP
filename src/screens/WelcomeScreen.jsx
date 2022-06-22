import { StyleSheet, Text, View, Button, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import tw from 'twrnc'
import { COLORS } from '../constants/theme'
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
                <TouchableOpacity onPress={() => console.log('a')} style={styles.appButtonContainer}>
                    <Text style={styles.appButtonText}>GET STARTED</Text>
                </TouchableOpacity>
                <View style={{ flexDirection: 'row', marginTop: 15 }}>
                    <Text style={{ color: COLORS.secondaryText }}>Already have an account ? </Text>
                    <TouchableOpacity onPress={() => console.log('a')} style={{ color: "#000" }}><Text>Sign In</Text>
                    </TouchableOpacity>
                </View>
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
    appButtonContainer: {
        backgroundColor: COLORS.primary,
        padding: 10,
        borderRadius: 15,
        marginTop: 20,
        width: 200,
        alignSelf: 'center'
    },
    appButtonText: {
        color: "#fff",
        fontSize: 15,
        fontWeight: 'bold',
        textAlign: 'center'
    }
})