import { Text, View } from 'react-native';
import style from './style'

export function TitleComponent() {
    return (
        <View style={style.boxTitle}>
            <Text style={style.textTitle}>BlHealth</Text>
        </View>
    );
}