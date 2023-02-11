import {
  View,
  Text,
  Dimensions,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {Shadow, Neomorph} from 'react-native-neomorph-shadows';
const {height, width} = Dimensions.get('window');
const LoginScreenWithNeomorph = () => {
  return (
    <View style={{flex: 1, backgroundColor: '#F0F0F0'}}>
      <Text
        style={{
          alignSelf: 'center',
          marginTop: 100,
          fontSize: 20,
          fontWeight: '700',
        }}>
        Login
      </Text>
      <View style={{width: '100%', alignItems: 'center'}}>
        <Shadow
          inner // <- enable inner shadow
          useArt // <- set this prop to use non-native shadow on ios
          style={{
            shadowOffset: {width: 5, height: 5},
            shadowOpacity: 2,
            shadowColor: '#C5C5C5',
            shadowRadius: 3,
            borderRadius: 20,
            backgroundColor: '#FFFFFF',
            width: width - 20,
            marginTop: 30,
            height: 60,
            // ...include most of View/Layout styles
          }}>
          <TextInput
            style={{
              width: '100%',
              height: '100%',
              paddingLeft: 20,
              fontWeight: '700',
            }}
            placeholder="Enter Email"
          />
        </Shadow>
        <Shadow
          inner // <- enable inner shadow
          useArt // <- set this prop to use non-native shadow on ios
          style={{
            shadowOffset: {width: 5, height: 5},
            shadowOpacity: 2,
            shadowColor: '#C5C5C5',
            shadowRadius: 3,
            borderRadius: 20,
            backgroundColor: '#FFFFFF',
            width: width - 20,
            marginTop: 30,
            height: 60,
            // ...include most of View/Layout styles
          }}>
          <TextInput
            style={{
              width: '100%',
              height: '100%',
              paddingLeft: 20,
              fontWeight: '700',
            }}
            placeholder="Enter Password"
          />
        </Shadow>

        <Neomorph
          outer // <- enable shadow inside of neomorph
          swapShadows // <- change zIndex of each shadow color
          style={{
            shadowRadius: 3,
            borderRadius: 20,
            backgroundColor: '#F8F8F8',
            width: width - 20,
            height: 60,
            marginTop: 50,
          }}>
          <TouchableOpacity
            style={{
              width: '100%',
              height: '100%',

              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text style={{fontSize: 20, fontWeight: '700'}}>Login</Text>
          </TouchableOpacity>
        </Neomorph>
      </View>
    </View>
  );
};

export default LoginScreenWithNeomorph;
