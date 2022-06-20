import { StyleSheet, Text, View, Button } from 'react-native'
import React from 'react'

const SignUpScreen = ({ navigation }) => {
    return (
        <View>
            <Text>SignUpScreen</Text>
            <Button title="signIn" onPress={() => {
                navigation.navigate('SignIn')
            }
            } />
        </View>
    )
}

export { SignUpScreen }

const styles = StyleSheet.create({})