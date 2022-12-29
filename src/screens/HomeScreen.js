import React from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity } from "react-native";

const HomeScreen = ({ navigation }) => {
  return (
    <View>
      <Text style={styles.text}>Hi There</Text>
      <Button
        onPress={() => navigation.navigate('Component')}
        title="Go to Components Demo"
      />
      <Button 
        title="Go to List Demo"
        onPress={() => navigation.navigate('List')}
      />
      <Button 
        onPress={() => navigation.navigate('Image')}
        title="Go to Image Demo"
      />
           <Button 
        onPress={() => navigation.navigate('Counter')}
        title="Go to Counter Demo"
      />

      <Button
        title="Go to Color Demo"
        onPress={() => { navigation.navigate('Color') }}
      />
    </View>
  )
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
    marginVertical: 10,
  },
});

export default HomeScreen;
