import {View, Text} from 'react-native';
import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import Home from './screens/Home';
import Details from './screens/Details';

import {createSharedElementStackNavigator} from 'react-navigation-shared-element';
const Stack = createSharedElementStackNavigator();
const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen
          name="Details"
          component={Details}
          options={{headerShown: false}}
          sharedElements={(route, otherRoute, showing) => {
            const {image} = route.params;
            return [`image` + image.id];
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
