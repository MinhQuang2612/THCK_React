import React from 'react';
import { Provider } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import store from './store';
import HomeScreen from './HomeScreen';
import BikeListScreen from './BikeListScreen';
import BikeDetailScreen from './BikeDetailScreen';
import AddBikeScreen from './AddBikeScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
          <Stack.Screen name="BikeList" component={BikeListScreen} options={{ title: 'Bike List', headerShown: false }} />
          <Stack.Screen name="BikeDetail" component={BikeDetailScreen} options={{ title: 'Bike Details' }} />
          <Stack.Screen name="AddBike" component={AddBikeScreen} options={{ title: 'Add New Bike' }} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
