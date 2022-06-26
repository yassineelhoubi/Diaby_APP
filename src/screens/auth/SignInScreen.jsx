import { StyleSheet, SafeAreaView, View } from 'react-native'
import React from 'react'
import { AuthFooter, SignInForm, AuthHeader } from '../../modules/auth';
import { BackBtn } from '../../components';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { StatusBar } from "expo-status-bar";

const SignInScreen = ({ navigation }) => {
    return (
        <>
            <BackBtn onPress={() => navigation.goBack()} />

            <SafeAreaView style={styles.container}>

                <KeyboardAwareScrollView
                    contentContainerStyle={{ flexGrow: 1, justifyContent: 'center' }}
                >
                    {/* <View style={{ height:"100%", backgroundColor:"green" }}> */}

                    <AuthHeader title="Login" subTitle="Enter your login details to access your account" />
                    <SignInForm navigation={navigation} />
                    <AuthFooter text={'Don\'t have an account?'}
                        actionName={'Sign In'}
                        onPress={() => navigation.push('SignUp')} />
                    {/* </View> */}
                </KeyboardAwareScrollView >
            </SafeAreaView>
            <StatusBar style="dark" />
        </>
    )
}

export { SignInScreen }

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        // marginTop: StatusBar.currentHeight,
        // justifyContent: 'center',
        padding: 25
    },
})