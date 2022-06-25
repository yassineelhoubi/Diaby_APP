import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { COLORS } from '../../constants/theme'

const AuthHeader = ({ title, subTitle }) => {
    return (
        <View style={styles.headerContainer}>
            <Image source={require('./../../../assets/diaby-logos.png')} style={styles.logo} />
            <Text style={styles.title} >{title}</Text>
            <Text style={styles.subTitle} >{subTitle}</Text>
        </View>
    )
}

export { AuthHeader }

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
    subTitle: {
        color: COLORS.secondaryText,
        fontSize: 15,
        letterSpacing: 1,
        textAlign: 'center',
        marginBottom: 20
    },
})