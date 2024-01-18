import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import colors from './app/config/colors';

export default function App() {
  return (
    <View style={styles.container}>
      <View style = {styles.darkGreyContainer}>
        <View style = {styles.redSquare}>
          <Text>1</Text>
        </View>
      </View>
      <View style = {styles.darkGreyContainer}>
        <View style = {styles.redSquare}>
          <Text>2</Text>
        </View>
      </View>
      <View style = {styles.darkGreyContainer}>
        <View style = {styles.redSquare}>
          <Text>3</Text>
        </View>
      </View>
      
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
  darkGreyContainer: {
    backgroundColor:'darkgray',
    flexDirection: 'row',
    width: 100,
    // justifyContent: 'center',

  },
  redSquare: {
    backgroundColor:'red',
    width: 20,
    height: 20,
  },
  darkGreenContainer: {

  },
  lightGreenRectangle :{

  },
});
