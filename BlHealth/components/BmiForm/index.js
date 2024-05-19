import React, { useState } from 'react';
import { Text, TextInput, View, Button } from 'react-native';

const Component = () => {

    const defaultMessage = "Fill the form to calculate your BMI"
    const defaultButton = "Calculate"
    const defaultClearButton = "Clear"

    const [weigth, setWeigth] = useState(null);
    const [height, setHeight] = useState(null);
    const [message, setMessage] = useState(defaultMessage);
    const [buttonMessage, setButtonMessage] = useState(defaultButton);

    function calculateImc()
    {
        if (buttonMessage === defaultClearButton){
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

        let bmi = (weigth/(height*height)).toFixed(2)
        setMessage("Your BMI is " + bmi + ".")
        setButtonMessage(defaultClearButton)
    }

    return (
        <View>
            <Text>Heigth</Text>
            <TextInput 
                placeholder='Ex. 1.2'
                value={height}
                onChangeText={setHeight}
                keyboardType='numeric'/>


            <Text>Weigth</Text>
            <TextInput 
                value={weigth}
                onChangeText={setWeigth}
                placeholder='Ex. 70'
                keyboardType='numeric'/>

            <Button onPress={calculateImc} title={buttonMessage} />
            
            <Text>{message}</Text>
        </View>
    );
}

export default Component;