import {View, Text} from 'react-native';
import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import Demo from './screens/Demo';
import Details from './screens/Details';

import {createSharedElementStackNavigator} from 'react-navigation-shared-element';
import Home1 from './screens/Home1';
import Demo3 from './screens/Demo3';
import Login from './screens/Login';
const Stack = createSharedElementStackNavigator();
const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Login"
          component={Login}
          options={{headerShown: false}}
        />
        {/* <Stack.Screen name="Home1" component={Home1} />
        <Stack.Screen name="Demo3" component={Demo3} />

        <Stack.Screen name="Home" component={Demo} />

        <Stack.Screen
          name="Details"
          component={Details}
          options={{headerShown: false}}
          sharedElements={(route, otherRoute, showing) => {
            const {image} = route.params;
            return [`image` + image.id];
          }}
        /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
