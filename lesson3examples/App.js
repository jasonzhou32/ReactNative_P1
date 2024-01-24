import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, TouchableHighlight, Image, Alert} from 'react-native';

import colors from './app/config/colors';
/*
const functionName = () => {
  function code
}
*/

const myFirstFunction = () => {
  console.log("I wrote a function");
}

const myAlertFn  = () =>{
  Alert.alert("Alert Title", "Alert message",[
    {text: "yes", onPress: () => console.log("pressed yes")},
    {text: "no", onPress: () => console.log("pressed no")},
  ]);
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

      <TouchableHighlight
        onPress={() => alert('Alert')}
        style = {styles.customButton}
        underlayColor='blue'
      >
        <Text>Custom button</Text>
      </TouchableHighlight>

      <Image
        style = {styles.smallImageStyles}
        source={{uri: 'https://picsum.photos/200/100'}}
      
      />

      <Image
        style = {styles.smallImageStyles}
        source={require('./app/assets/images/pic1.jpg')}
      
      />

      <Button
        title="Alert button"
        onPress={myAlertFn}
      />

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
  },
  customButton: {
    backgroundColor: colors.orangeyellow,
    width: 50,
    height: 50,
    borderRadius: 7,
  },
  smallImageStyles: {
    width: 200,
    height: 200,
    margin: 10,
    bordeWidth: 2,
    borderColor: 'black',
  }



});
