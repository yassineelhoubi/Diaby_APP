import { View, Text } from 'react-native'
import React from 'react'
import { SignInForm } from '../modules/auth'
import { SafeAreaView } from 'react-native-safe-area-context';

const SignInScreen = () => {
    return (
        <SafeAreaView>
            <SignInForm />
        </SafeAreaView>
    )
}

export default SignInScreen