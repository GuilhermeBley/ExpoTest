import { StyleSheet } from 'react-native'  

const defaultStyle = () =>
    StyleSheet.create({
        boxTitle: {
            alignItems: 'center',
            justifyContent: 'center',
            padding: 10
        },
        textTitle: {
            color: '#FF0043',
            fontSize: 24,
            fontWeight: 'bold'
        }
    });

export default defaultStyle();