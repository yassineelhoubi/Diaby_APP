import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Modal } from "react-native-paper";
const DiaryInputModal = ({ handleModalVisibility, handleUserDiary }) => {
    const { setModalVisible, modalVisible } = handleModalVisibility;
    const { setUserDiary, userDiary } = handleUserDiary;
    return (
        <Modal visible={modalVisible} onDismiss={setModalVisible} contentContainerStyle={styles.modalContainer}>
            {/* <Text>{userDiary.type == "sugarLevel" ? "Sugar Level" : "--"}</Text> */}
            <Text>Sugar Level</Text>
        </Modal>
    )
}

export { DiaryInputModal }

const styles = StyleSheet.create({
    modalContainer: {
        backgroundColor: 'white',
        marginHorizontal: 20,
        padding: 20
    }
})