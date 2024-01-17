import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Dimensions } from 'react-native';

export default function App() {
  const {height, width} = Dimensions.get('window');
  // if you rotate the screen, the Dimensions don't 
  // automatically refresh
  const screenWidth = Dimensions.get('screen').width;
  console.log("height: " + height + " width: " + width);
  // if you want to refer to the height and width within
  // your style sheet then you need to define your stylesheet
  // BEFORE the return statement



  // w3 schools has a lsit of color names
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'lightblue',
      alignItems: 'center',
      justifyContent: 'center',
    },
    text: {
      fontSize: 28,
      color: 'red',
      height: height/10,  // trying to make height of text component
                          // 1/10 of the screen
    },
    
  });

  return (
    <View style={styles.container}>
      <Text style = {styles.text}>Good morning</Text>
      <Text style = {{color:"yellow", fontSize:20}}>Today is Wednesday</Text>
      <StatusBar style="auto" />
    </View>
  );
}

