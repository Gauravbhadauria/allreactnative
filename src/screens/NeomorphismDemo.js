import {View, Text, Image, TextInput} from 'react-native';
import React from 'react';
import {Neomorph, NeomorphBlur, Shadow} from 'react-native-neomorph-shadows';
const NeomorphismDemo = () => {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Shadow
        inner // <- enable inner shadow
        useArt // <- set this prop to use non-native shadow on ios
        style={{
          shadowOffset: {width: 10, height: 10},
          shadowOpacity: 1,
          shadowColor: '#E5E5E5',
          shadowRadius: 5,
          borderRadius: 20,
          backgroundColor: 'white',
          width: 300,
          height: 60,
          justifyContent: 'center',
          paddingLeft: 20,
          // ...include most of View/Layout styles
        }}>
        <TextInput
          placeholder="Enter Name"
          style={{fontSize: 18, fontWeight: '600'}}
        />
      </Shadow>
    </View>
  );
};

export default NeomorphismDemo;
