import { StatusBar } from 'expo-status-bar';
import { StyleSheet,View } from 'react-native';
import * as React from 'react';
import { Text, TouchableRipple } from 'react-native-paper';

export default function App() {
  return (
    <View style={styles.container}>
      <TouchableRipple
          onPress={() => console.log('Pressed')}
          rippleColor="rgba(0, 0, 0, .32)"
        >
          <Text>Press anywhere</Text>
      </TouchableRipple>
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
});
