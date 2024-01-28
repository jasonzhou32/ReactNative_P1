import React from 'react';
import { StyleSheet, TouchableHighlight, Text, View } from 'react-native';
import colors from '../config/colors';
import { MaterialCommunityIcons } from '@expo/vector-icons';

function IconTextButton({
  title = "FHS",
  onPress,
  backgroundColor = "white",
  borderColor = "green",
  name = "school",
  size = 24,
}) {
  return (
    <TouchableHighlight
      style={[styles.button, { backgroundColor: backgroundColor, borderColor: borderColor }]}
      onPress={onPress}
    >
      <View style={styles.contentContainer}>
        <MaterialCommunityIcons name={name} color={borderColor} size={size} />
        <Text style={{ color: borderColor, marginLeft: 10 }}>{title}</Text>
      </View>
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
    height: 50,
    width: 100, 
    borderRadius: 10,
    backgroundColor: colors.pink,
    borderColor: colors.purple,
    borderWidth: 2,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  contentContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  text: {
    color: 'black',
    fontSize: 15,
    fontWeight: 'bold',
  },
});

export default IconTextButton;
