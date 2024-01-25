import React from 'react';
import {StyleSheet, TouchableHighlight, Text} from 'react-native';
import colors from '../config/colors';

function MyButton({title="0", onPress}) {
    return(
        <TouchableHighlight
            style={styles.button}
            onPress = {onPress}
            
            underlayColor = {colors.purple}
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

export default MyButton;