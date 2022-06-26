import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { TextInput } from 'react-native-paper';
import { COLORS } from '../../constants/theme';
const SignInFields = ({ handleChange, handleBlur, values, errors, touched }) => {
    return (
        <>
            <View style={styles.inputContainer}>
                <TextInput
                    onChangeText={handleChange('email')}
                    onBlur={handleBlur('email')}
                    value={values.email}
                    label="Email"
                    placeholder="Enter your email"
                    mode="outlined"
                    error={errors.email && touched.email}
                    underlineColor={COLORS.primary}
                    selectionColor={COLORS.primary}
                    activeUnderlineColor={COLORS.primary}
                    outlineColor={COLORS.secondary}
                    activeOutlineColor={COLORS.primary}
                />
                {errors.email && touched.email ? (
                    <Text style={{ color: "red" }}>{errors.email}</Text>
                ) : null}
            </View>
            <View style={styles.inputContainer}>
                <TextInput
                    onChangeText={handleChange('password')}
                    onBlur={handleBlur('password')}
                    value={values.password}
                    label="Password"
                    placeholder="Enter your password"
                    mode="outlined"
                    error={errors.password && touched.password}
                    underlineColor={COLORS.primary}
                    selectionColor={COLORS.primary}
                    activeUnderlineColor={COLORS.primary}
                    outlineColor={COLORS.secondary}
                    activeOutlineColor={COLORS.primary}
                />
                {errors.password && touched.password ? (
                    <Text style={{ color: "red" }}>{errors.password}</Text>
                ) : null}
            </View>
        </>
    )
}

export { SignInFields }

const styles = StyleSheet.create({
    inputContainer: {
        marginBottom: 10
    }
})