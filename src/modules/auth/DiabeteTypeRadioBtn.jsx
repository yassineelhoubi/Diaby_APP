import { StyleSheet, Text, View } from 'react-native'
import * as React from 'react';
import { RadioButton } from 'react-native-paper';

const DiabeteTypeRadioBtn = () => {
    const [checked, setChecked] = React.useState('first');

    return (
        <View>
            <RadioButton.Group
                onValueChange={value => setChecked(value)}
                value={checked}
            >
                <RadioButton.Item label="First" value="first" />
                <RadioButton.Item label="Second" value="second" />
                <RadioButton.Item label="Third" value="third" />
            </RadioButton.Group>
        </View>
    );
};

export { DiabeteTypeRadioBtn }

const styles = StyleSheet.create({})