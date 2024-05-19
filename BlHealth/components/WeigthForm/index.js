import { useState } from 'react';
import { Text, TextInput, View, Button } from 'react-native';

export function Component() {

    const defaultMessage = "Fill the form to calculate your BMI"

    const [weigth, setWeigth] = useState(null);
    const [height, setHeight] = useState(null);
    const [message, setMessage] = useState(defaultMessage);

    function calculateImc()
    {
        if (weigth === null) {
            setMessage(defaultMessage);
            return
        }
        if (height === null) {
            setMessage(defaultMessage);
            return
        }

        let bmi = (weigth/(height*height)).toFixed(2)
        setMessage("Your BMI is " + bmi + ".")
    }

    return (
        <View>
            <Text>Heigth</Text>
            <TextInput 
                placeholder='Ex. 1.2'
                value={height}
                onChange={setHeight}
                keyboardType='numeric'/>


            <Text>Weigth</Text>
            <TextInput 
                value={weigth}
                onChange={setWeigth}
                placeholder='Ex. 70'
                keyboardType='numeric'/>

            <Button onPress={calculateImc} title='Calculate' />
            
            <Text>{message}</Text>
        </View>
    );
}