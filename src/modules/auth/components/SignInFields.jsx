import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {  TextInput } from 'react-native-paper';
import { COLORS } from '../../../constants/theme';
const SignInFields = ({handleChange , values , errors , touched }) => {
    return (
        <View>
            <TextInput
                onChangeText={handleChange('firstName')}
                value={values.firstName}
                label="First name"
                placeholder="I am ready!"
                mode="outlined"
                error={errors.firstName && touched.firstName}
                underlineColor={COLORS.primary}
                selectionColor={COLORS.primary}
                activeUnderlineColor={COLORS.primary}
                outlineColor={COLORS.secondary}
                activeOutlineColor={COLORS.primary}
            />
            {errors.firstName && touched.firstName ? (
                <Text style={{ color: "red" }}>{errors.firstName}</Text>
            ) : null}
        </View>
    )
}

export { SignInFields }

const styles = StyleSheet.create({})