import React from 'react';
import {
  View,
  Text,
  TouchableWithoutFeedback,
  ImageBackground,
} from 'react-native';
import styles from './MealsCard.style';
const MealsCard = ({meals, onSelect}) => {
  return (
    <TouchableWithoutFeedback onPress={onSelect}>
      <View style={styles.container}>
        <ImageBackground
          source={{uri: meals.strMealThumb}}
          style={styles.image}
          imageStyle={styles.image}>
          <View style={styles.inner_container}>
            <View style={styles.info_container}>
              <Text style={styles.text}>{meals.strMeal}</Text>
            </View>
          </View>
        </ImageBackground>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default MealsCard;
