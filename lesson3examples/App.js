import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, TouchableHighlight } from 'react-native';



/*
const functionName = () => {
  function code
}
*/

const myFirstFunction = () => {
  console.log("I wrote a function");
}


export default function App() {
  return (
    <View style={styles.container}>
      <Button
        title="My button"
        onPress={() => console.log('pressed button')}
      />
      <Button
        title="Function button"
        onPress={myFirstFunction}
      />
      <TouchableHighlight
        onPress={() => alert('Hey there!')}
        style = {styles.button}
        underlayColor='blue'
      >
        <Text>TH button</Text>
      </TouchableHighlight>

      <StatusBar style="auto" />
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
  button: {
    backgroundColor: 'green',
    width: 50,
    height: 50,
    borderRadius: 7,
  }



});
