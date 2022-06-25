import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons'

const BackBtn = ({onPress}) => {
    return (
        <TouchableOpacity onPress={onPress} style={{ position: "absolute", top: 50, left: 15, zIndex: 10 }} >
            <Ionicons name="arrow-back-outline" size={40} color="black" />
        </TouchableOpacity>
    )
}

export { BackBtn }

const styles = StyleSheet.create({})