import { StyleSheet, Text, View } from 'react-native';
import { TitleComponent } from './components/Title'
import BmiFormComponent from './components/BmiForm'

export default function App() {
  return (
    <View style={styles.container}>
      <TitleComponent/>

      <BmiFormComponent/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
