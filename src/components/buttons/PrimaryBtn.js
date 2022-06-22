import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import { COLORS } from '../../constants/theme'

const PrimaryBtn = ({title, OnPress}) => {
    return (
        <TouchableOpacity onPress={OnPress} style={styles.appButtonContainer}>
            <Text style={styles.appButtonText}>{title}</Text>
        </TouchableOpacity>
    )
}

export { PrimaryBtn }

const styles = StyleSheet.create({
    appButtonContainer: {
        backgroundColor: COLORS.primary,
        padding: 10,
        borderRadius: 15,
        marginTop: 20,
        width: 200,
        alignSelf: 'center'
    },
    appButtonText: {
        color: "#fff",
        fontSize: 15,
        fontWeight: 'bold',
        textAlign: 'center'
    }
})