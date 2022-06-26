import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import { COLORS } from '../../constants/theme'

const PrimaryBtn = ({ title, onPress, style, disabled }) => {
    return (
        <TouchableOpacity onPress={onPress} disabled={disabled} style={{ ...styles.appButtonContainer(disabled), ...style }}>
            <Text style={styles.appButtonText(disabled)}>{title}</Text>
        </TouchableOpacity>
    )
}

export { PrimaryBtn }

const styles = StyleSheet.create({
    appButtonContainer: (disabled) => ({
        backgroundColor: disabled ? "gray" : COLORS.primary,
        padding: 10,
        borderRadius: 15,
        marginTop: 20,
        width: 200,
        alignSelf: 'center'
    }),
    appButtonText: (disabled) => ({
        color: disabled ? "#cccccc" : "white",
        fontSize: 15,
        fontWeight: 'bold',
        textAlign: 'center'
    })
})