import * as React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';

import colors from '../config/colors';


function ListItem({name, age, favActivity, onPress}) {
  return(
    <TouchableOpacity onPress = {onPress}>
        <View style={styles.listItemContainer}>
            <Text style={[styles.itemText, {fontSize: 16, fontWeight: 'bold'}]}>{name}, {age}</Text>
            <Text style={[styles.itemText, {color: colors.secondary}]}>{favActivity}</Text>
        </View>
    </TouchableOpacity>
    
  );
}


const styles = StyleSheet.create({
    listItemContainer: {
        padding: 5,
        backgroundColor: colors.light,
      },
  
      itemText: {
        color: colors.primary,
        fontSize: 14,
  
      },
   

});

export default ListItem; 
