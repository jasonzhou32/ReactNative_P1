import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import colors from './app/config/colors';

export default function App() {
  return (
    <View style={styles.container}>
      <View style = {styles.darkGreyContainer}>
        <View style = {styles.redSquare}>
          <Text style = {{fontWeight:'bold'}}>1</Text>
        </View>
        <View style = {styles.redSquare}>
          <Text style = {{fontWeight:'bold'}}>2</Text>
        </View>
        <View style = {styles.redSquare}>
          <Text style = {{fontWeight:'bold'}}>3</Text>
        </View>
      </View>
      {/* Dark Green Container */}
      <View style = {styles.darkGreenContainer}>
        <View style = {styles.lightGreenRectangle}></View>
        <View style = {styles.lightGreenRectangle}></View>
        <View style = {styles.lightGreenRectangle}></View>
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
    marginTop: 40,
    // justifyContent: 'center',
  },
  darkGreyContainer: {
    backgroundColor:'darkgray',
    flexDirection: 'row',
    // flex: 2,
    // without any other children of container 
    // using flex, any number here will fill 
    // the screen along the main axis
    width: '80%',
    height: '20%',
    padding: 5,
    justifyContent: 'center',
    // alignItems:'center',
    // justifyContent: 'center',

  },
  redSquare: {
    backgroundColor:'red',
    width: 40,
    height: 40,
    padding: 10,
    margin: 10,
    marginTop: 15,
    justifyContent: 'center',
    alignItems:'center',
  },
  darkGreenContainer: {
    backgroundColor:'darkgreen',
    flexDirection: 'column',
    // flex: 2,
    // without any other children of container 
    // using flex, any number here will fill 
    // the screen along the main axis
    width: '80%',
    height: '70%',
    padding: 5,
    marginTop: 15,
    justifyContent: 'center',
    alignItems:'center',
    // justifyContent: 'center',

  },
  lightGreenRectangle :{
    backgroundColor:'lightgreen',
    width: '80%',
    height: 50,
    margin: 8,
    justifyContent: 'center',
    alignItems:'center',

  },
});
