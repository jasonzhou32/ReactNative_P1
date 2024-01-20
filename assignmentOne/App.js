import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import colors from './app/config/colors';

export default function App() {
  return (
    <View style={styles.container}>
      <View style = {styles.primaryContainer}>
        <View style = {styles.secondaryRect}>
          <Text style = {{fontWeight:'bold', fontSize: 26}}>React Native Assgn 1</Text>
        </View>
      </View>
      {/* Secondary Container */}
      <View style = {styles.secondaryContainer}>
        <View style = {styles.darkGreyRectangle}></View>
        <View style = {styles.darkGreyRectangle}></View>
        <View style = {styles.darkGreyRectangle}></View>
        <View style = {styles.tealRectangle}></View>
      </View>
      
      
      
      
      <StatusBar style="auto" />
    </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.lightGrey,
    alignItems: 'center',
    marginTop: 40,
    // justifyContent: 'center',
  },
  primaryContainer: {
    backgroundColor: colors.primary,
    flexDirection: 'row',
    // flex: 2,
    // without any other children of container 
    // using flex, any number here will fill 
    // the screen along the main axis
    width: '85%',
    height: '15%',
    padding: 5,
    justifyContent: 'center',
    // alignItems:'center',
    // justifyContent: 'center',

  },
  secondaryRect: {
    backgroundColor: colors.secondary,
    width: '90%',
    height: '65%',
    padding: 10,
    margin: 10,
    marginTop: 5,
    justifyContent: 'center',
    alignItems:'center',
  },
  secondaryContainer: {
    backgroundColor: colors.secondary,
    flexDirection: 'row',
    // flex: 2,
    // without any other children of container 
    // using flex, any number here will fill 
    // the screen along the main axis
    width: '85%',
    height: '80%',
    paddingTop:15,
    marginTop: 15,
    justifyContent: 'space-evenly',
    
    // justifyContent: 'center',

  },
  darkGreyRectangle :{
    backgroundColor: colors.darkGrey,
    width: '28%',
    height: 50,
    borderRadius: 10,
  },
  tealRectangle :{
    backgroundColor: colors.teal,
    width: '25.1%',
    height: '40%',
    
    position: 'absolute',
    bottom: 35,
    right: 0,
    marginRight:'4%',
    borderWidth: 3.5, 
    borderColor: colors.darkGrey,
    
    
  },
});
