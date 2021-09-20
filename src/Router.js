import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Categories from './pages/Categories';
import Meals from './pages/Meals';
import Details from './pages/Details';
const Router = () => {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="CategoriesPage"
          component={Categories}
          options={{
            title: 'Categories',
            headerStyle: {
              backgroundColor: '#fff',
            },
            headerTintColor: '#f4511e',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
        />
        <Stack.Screen
          name="Meals"
          component={Meals}
          options={{
            title: 'Meals',
            headerStyle: {
              backgroundColor: '#fff',
            },
            headerTintColor: '#f4511e',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
        />
        <Stack.Screen
          name="Detail"
          component={Details}
          options={{
            title: 'Detail',
            headerStyle: {
              backgroundColor: '#fff',
            },
            headerTintColor: '#f4511e',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Router;
