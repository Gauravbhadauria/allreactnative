import {View, Text, Image} from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
const BlurEffect = () => {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#880000',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Image
        source={require('../images/ironman.webp')}
        style={{width: '90%', height: '50%', borderRadius: 20}}
      />
      <LinearGradient
        colors={['transparent', 'transparent', 'rgba(0,0,0,.9)']}
        style={{
          width: '100%',
          height: '100%',
          position: 'absolute',
          top: 0,
          bottom: 0,
          left: 0,
          right: 0,
        }}>
        <Text
          style={{
            position: 'absolute',
            bottom: 20,
            color: '#fff',
            left: 20,
            fontSize: 50,
          }}>
          Iron Man
        </Text>
      </LinearGradient>
    </View>
  );
};

export default BlurEffect;
