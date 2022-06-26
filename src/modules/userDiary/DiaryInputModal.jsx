import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Button, Modal } from "react-native-paper";
import { TextInput } from 'react-native-paper';
import { COLORS } from '../../constants/theme';
const DiaryInputModal = ({ handleModalVisibility, handleUserDiary }) => {
    const { setModalVisible, modalVisible } = handleModalVisibility;
    const { setUserDiary, userDiary } = handleUserDiary;
    const label = {
        sugarLevel: "Sugar Level",
        insulin: "Insulin",
        pill: "Pill"
    }
    return (
        <Modal visible={modalVisible} onDismiss={setModalVisible} contentContainerStyle={styles.modalContainer}>
            <View style={styles.modalContent}>
                <Text style={{ color: COLORS.primaryText, fontWeight: "bold", fontSize: 15 }}>{label[userDiary.type]}</Text>
                <TextInput
                    label="Value"
                    mode='outlined'
                    value={userDiary.value}
                    keyboardType='numeric'
                    underlineColor={COLORS.primary}
                    selectionColor={COLORS.primary}
                    activeUnderlineColor={COLORS.primary}
                    outlineColor={COLORS.secondary}
                    activeOutlineColor={COLORS.primary}
                    onChangeText={text => setUserDiary({ ...userDiary, value: text })}
                />
                <View style={{ flexDirection: "row", justifyContent: "flex-end" }}>
                    <Button style={{ width: 100, height: 40, alignContent: "flex-end" }} color={COLORS.primary} mode="outlined" onPress={() => console.log(userDiary)}>
                        Done
                    </Button>
                </View>
            </View>
        </Modal>
    )
}

export { DiaryInputModal }

const styles = StyleSheet.create({
    modalContainer: {
        borderRadius: 10,
        backgroundColor: 'white',
        marginHorizontal: 20,
        padding: 20,
    },
    modalContent: {
        height: 150,
        justifyContent: 'space-between',
    }
})