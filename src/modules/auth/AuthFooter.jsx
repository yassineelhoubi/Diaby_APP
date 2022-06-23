import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { COLORS } from '../../constants/theme'

const AuthFooter = ({ text, actionName, onPress }) => {
    return (
        <View style={{ flexDirection: 'row', marginTop: 15 }}>
            <Text style={{ color: COLORS.secondaryText }}>{text}</Text>
            <TouchableOpacity onPress={onPress} style={{ color: "#000" }}><Text> {actionName}</Text>
            </TouchableOpacity>
        </View>
    )
}

export { AuthFooter }

const styles = StyleSheet.create({

})