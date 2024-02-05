import * as React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import {Swipeable, GestureHandlerRootView} from 'react-native-gesture-handler';
import colors from '../config/colors';


function ListItem({name, age, favActivity, onPress, renderRightActions}) {
  return(
    <GestureHandlerRootView>

      <Swipeable renderRightActions = {renderRightActions}>
        <TouchableOpacity onPress = {onPress}>
          <View style={styles.listItemContainer}>
              <Text style={[styles.itemText, {fontSize: 16, fontWeight: 'bold'}]}>{name}, {age}</Text>
              <Text style={[styles.itemText, {color: colors.secondary}]}>{favActivity}</Text>
          </View>
        </TouchableOpacity>

      </Swipeable>
      
    </GestureHandlerRootView>
    
    
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
