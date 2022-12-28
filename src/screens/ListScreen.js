import React from 'react';
import { View, StyleSheet, Text, FlatList } from 'react-native';

const ListScreen = () => {
  
  const friends = [
    {name: 'Friend #1'},
    {name: 'Friend #2'},
    {name: 'Friend #3'},
    {name: 'Friend #4'},
]
  
  return (
    <FlatList 
    data={friends}
    renderItem={({ item }) => {
      return <Text>{item.name}</Text>
    }}/>
  )
}

export default ListScreen;