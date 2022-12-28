import React from 'react';
import { Text, StyleSheet, View } from 'react-native';

const ComponetScreen = () => {
  
  const greeting = 'Hi there!';
  
  return (
    <View>
      <Text style={styles.textStyle}>This is the components screen</Text>
      <Text>{greeting}</Text>
    </View>
  )
}
const styles = StyleSheet.create({
  textStyle: {
    fontSize: 30
  }
});


export default ComponetScreen;