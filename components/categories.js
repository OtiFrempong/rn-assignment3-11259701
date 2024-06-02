import React from 'react';
import { StyleSheet, Text, View,FlatList, Image} from 'react-native';

function Categories() {
    const images = [
        { src: require('../assets/card1.png')},
        { src: require('../assets/card2.png')},
        // Add more images as needed
    ];


  return (
    <FlatList
    data={images}
    renderItem={({ item }) => (
      <View style={styles.imageContainer}>
        <Image source={item.src} style={styles.categoryImage} />
        <Text style={styles.imageText}>{item.label}</Text>
      </View>
    )}
    keyExtractor={(item, index) => index.toString()}
    horizontal
    showsHorizontalScrollIndicator={false}
    />
  )
}


const styles = StyleSheet.create({
    categoryImage: {
      width: 200,
      height: 200,
      marginHorizontal: 10,
    },
    imageText: {
      position: 'absolute',
      top: 10,
      left: 10,
      color: 'black',
      backgroundColor: 'white',
      padding: 5,
      borderRadius: 5,
      fontWeight: 'bold',
      fontSize: 18,
    },
  });
  

export default Categories
