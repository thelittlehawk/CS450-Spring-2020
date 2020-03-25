import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  console.log('Test');
  return (
    <View style={styles.container}>
      <Text>This is new!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
});
