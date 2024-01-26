import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TouchableHighlight, View } from 'react-native';

import colors from './app/config/colors';
import MyButton from './app/components/MyButton';
import CustomRectangleButton from './app/components/CustomRectangleButton';



export default function App() {
  return (
    <View style={styles.container}>
      <TouchableHighlight
        style={styles.button}
        onPress = {() => console.log("button pressed")}
        underlayColor = {colors.purple}
      >
        <Text style = {styles.text}>Hi</Text>
      </TouchableHighlight>
      <MyButton title = "1st" onPress={() => console.log("1st")}/>
      <MyButton title = "2nd" onPress={() => console.log("2nd")}/>
      <MyButton onPress={() => console.log("None")}/>
      <CustomRectangleButton title = "Rectangle" onPress={() => console.log("Rectangle Button Pressed")}/>
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
    // circle shape: height and width same
    //borderRadius = 1/2 height
    height: 50,
    width: 50,
    borderRadius: 25,
    backgroundColor: colors.pink,
    borderColor: colors.purple,
    borderWidth: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: 'black',
    fontSize: 15,
    fontWeight: 'bold',
  }
});
