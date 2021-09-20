import React from 'react';
import {View, Text, Image, TouchableWithoutFeedback} from 'react-native';
import styles from './CategoryCard.style';
const CategoryCard = ({categories, onSelect}) => {
  return (
    <TouchableWithoutFeedback onPress={onSelect}>
      <View style={styles.container}>
        <Image
          style={styles.image}
          source={{uri: categories.strCategoryThumb}}
        />
        <View style={styles.inner_container}>
          <Text style={styles.text}>{categories.strCategory}</Text>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default CategoryCard;
