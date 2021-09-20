import React from 'react';
import {FlatList} from 'react-native';
import Config from 'react-native-config';
import useFetch from '../../hooks/useFetch';
import LottieView from 'lottie-react-native';
import MealsCard from '../../components/MealsCard/MealsCard';
const Meals = ({navigation, route}) => {
  const {strCategory} = route.params;
  const {data, error, loading} = useFetch(
    'meals',
    `${Config.API_MEALS_URL}${strCategory}`,
  );

  const handleSelectDetail = idMeal => {
    navigation.navigate('Detail', {idMeal});
  };

  const renderMealsItems = ({item}) => {
    return (
      <MealsCard
        meals={item}
        onSelect={() => handleSelectDetail(item.idMeal)}
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

  return <FlatList data={data} renderItem={renderMealsItems} />;
};

export default Meals;
