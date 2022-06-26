import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { TextInput } from 'react-native-paper';
import { COLORS } from '../../constants/theme';
import { DiabeteTypeRadioBtn } from './DiabeteTypeRadioBtn';
import { RadioButton } from 'react-native-paper';

const SignUpFields = ({ handleChange, handleBlur, values, errors, touched }) => {

    return (
        <>
            <View style={styles.inputContainer}>
                <TextInput
                    onChangeText={handleChange('fName')}
                    onBlur={handleBlur('fName')}
                    value={values.fName}
                    label="First Name"
                    placeholder="Enter your first name"
                    mode="outlined"
                    error={errors.fName && touched.fName}
                    underlineColor={COLORS.primary}
                    selectionColor={COLORS.primary}
                    activeUnderlineColor={COLORS.primary}
                    outlineColor={COLORS.secondary}
                    activeOutlineColor={COLORS.primary}
                />
                {errors.fName && touched.fName ? (
                    <Text style={{ color: "red" }}>{errors.fName}</Text>
                ) : null}
            </View>
            <View style={styles.inputContainer}>
                <TextInput
                    onChangeText={handleChange('lName')}
                    onBlur={handleBlur('lName')}
                    value={values.lName}
                    label="Last Name"
                    placeholder="Enter your last name"
                    mode="outlined"
                    error={errors.lName && touched.lName}
                    underlineColor={COLORS.primary}
                    selectionColor={COLORS.primary}
                    activeUnderlineColor={COLORS.primary}
                    outlineColor={COLORS.secondary}
                    activeOutlineColor={COLORS.primary}
                />
                {errors.lName && touched.lName ? (
                    <Text style={{ color: "red" }}>{errors.lName}</Text>
                ) : null}
            </View>
            <View style={styles.inputContainer}>
                <TextInput
                    onChangeText={handleChange('email')}
                    onBlur={handleBlur('email')}
                    autoCapitalize="none"
                    theme={{ colors: { primary: COLORS.primary } }}
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
                    autoCapitalize="none"
                    value={values.password}
                    secureTextEntry={true}
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
            <View style={styles.inputContainer}>
                <RadioButton.Group
                    onValueChange={handleChange('diabetesType')}
                    value={values.diabetesType}
                >
                    <Text style={{ color: COLORS.primaryText }}>Diabete Type : </Text>
                    <RadioButton.Item label="Type 1" value="A" />
                    <RadioButton.Item label="Type 2" value="B" />
                    <RadioButton.Item label="Type 3" value="C" />
                </RadioButton.Group>
                {errors.diabetesType && touched.diabetesType ? (
                    <Text style={{ color: "red" }}>{errors.diabetesType}</Text>
                ) : null}
            </View>


        </>
    )
}

export { SignUpFields }

const styles = StyleSheet.create({
    inputContainer: {
        marginBottom: 10
    }
})