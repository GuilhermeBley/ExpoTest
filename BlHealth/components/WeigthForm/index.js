import { Text, TextInput, View, Button } from 'react-native';

export function Component() {
    return (
        <View>
            <Text>Heigth</Text>
            <TextInput 
                placeholder='Ex. 1.2'
                keyboardType='numeric'/>


            <Text>Weigth</Text>
            <TextInput 
                placeholder='Ex. 70'
                keyboardType='numeric'/>

            <Button title='Calculate'/>
        </View>
    );
}