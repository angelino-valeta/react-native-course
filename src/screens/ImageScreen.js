import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import ImageDetail from '../components/ImageDetail';

const ImageScreen = () => {

  const items = [
    {title: 'Forest', image: require('../../assets/forest.jpg')},
    {title: 'Beach', image: require('../../assets/beach.jpg')},
    {title: 'Mountain', image: require('../../assets/mountain.jpg')},
  ]

  return(
    <View>
      {items.map((item) => {
        return (
          <ImageDetail 
            title={item.title}
            image={item.image}
          />
        )
      })}
    </View>
  )
}

const styles = StyleSheet.create({

})

export default ImageScreen;

