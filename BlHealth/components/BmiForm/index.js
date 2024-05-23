import React, { useState } from 'react';
import { Text, TextInput, View, TouchableOpacity } from 'react-native';
import Style from './style'

const Component = () => {

    const defaultMessage = "Fill the form to calculate your BMI"
    const defaultButton = "Calculate"
    const defaultClearButton = "Clear"

    const [weigth, setWeigth] = useState(null);
    const [height, setHeight] = useState(null);
    const [message, setMessage] = useState(defaultMessage);
    const [buttonMessage, setButtonMessage] = useState(defaultButton);

    function calculateImc() {
        if (buttonMessage === defaultClearButton) {
            setWeigth(null)
            setHeight(null)
            setButtonMessage(defaultButton)
            setMessage(defaultMessage)
            return;
        }

        if (weigth === '' || weigth <= 0) {
            setMessage(defaultMessage);
            setButtonMessage(defaultButton)
            return
        }
        if (height === '' || height <= 0) {
            setMessage(defaultMessage);
            setButtonMessage(defaultButton)
            return
        }

        let bmi = (weigth / (height * height)).toFixed(2)
        setMessage("Your BMI is " + bmi + ".")
        setButtonMessage(defaultClearButton)
    }

    return (
        <View style={Style.formContext}>
            <View style={Style.form}>
                <Text style={Style.formLabel}>Heigth</Text>
                <TextInput
                    style={Style.input}
                    placeholder='Ex. 1.2'
                    value={height}
                    onChangeText={setHeight}
                    keyboardType='numeric' />


                <Text style={Style.formLabel}>Weigth</Text>
                <TextInput
                    style={Style.input}
                    value={weigth}
                    onChangeText={setWeigth}
                    placeholder='Ex. 70'
                    keyboardType='numeric' />

                <TouchableOpacity style={Style.buttonCalculator} onPress={calculateImc} >
                    <Text style={Style.textButtonCalculator}>{buttonMessage}</Text>
                </TouchableOpacity>

                <Text>{message}</Text>
            </View>
        </View>
    );
}

export default Component;