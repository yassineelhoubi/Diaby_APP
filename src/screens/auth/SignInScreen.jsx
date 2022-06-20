import { StyleSheet, Text, View, Button } from 'react-native'
import React from 'react'

const SignInScreen = ({ navigation }) => {
    return (
        <View>
            <Text>SignInScreen</Text>
            <Button title="Sign up" onPress={() => {
                navigation.navigate('SignUp')
            }
            } />
        </View>
    )
}

export { SignInScreen }

const styles = StyleSheet.create({})