import React from 'react';
import {StyleSheet, TouchableHighlight, Text} from 'react-native';
import colors from '../config/colors';

function CustomRectangleButton({title="0", onPress, color}) {
    return(
        <TouchableHighlight
            style={styles.button}
            onPress = {onPress}
            
            underlayColor = {color}
            >
            <Text style = {styles.text}>{title}</Text>
        </TouchableHighlight>
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
        width: 100,
        borderRadius: 10,
        backgroundColor: 'lightblue',
        borderColor: 'darkgreen',
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

export default CustomRectangleButton;