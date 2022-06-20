import { StyleSheet, Text, View, Button } from 'react-native'
import React from 'react'
const WelcomeScreen = ({ navigation }) => {
    return (

        <View>
            <Text>WelcomeScreen</Text>
            <Button title="GET STARTED" onPress={() => {
                navigation.navigate('SignIn')
            }} />
        </View>
    )
}

export { WelcomeScreen }

const styles = StyleSheet.create({})