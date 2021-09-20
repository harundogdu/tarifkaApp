import React from 'react';
import {FlatList} from 'react-native';
import Config from 'react-native-config';
import styles from './Categories.style';
import CategoryCard from '../../components/CategoryCard';
import LottieView from 'lottie-react-native';
import useFetch from '../../hooks/useFetch';
const Categories = ({navigation}) => {
  const {data, error, loading} = useFetch('categories', Config.API_URL);

  const handleCategorySelect = strCategory => {
    navigation.navigate('Meals', {strCategory});
  };

  const renderCategoryItems = ({item}) => {
    return (
      <CategoryCard
        categories={item}
        onSelect={() => handleCategorySelect(item.strCategory)}
      />
    );
  };

  if (loading) {
    return (
      <LottieView
        source={require('../../assets/loading.json')}
        autoPlay={true}
      />
    );
  }
  if (error) {
    return (
      <LottieView source={require('../../assets/error.json')} autoPlay={true} />
    );
  }

  return (
    <FlatList
      style={styles.container}
      data={data}
      renderItem={renderCategoryItems}
    />
  );
};

export default Categories;
