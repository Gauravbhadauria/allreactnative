import {View, Text} from 'react-native';
import React from 'react';

const TinderLike = ({type}) => {
  return (
    <View>
      <Text
        style={{
          fontSize: 40,
          textTransform: 'uppercase',
          letterSpacing: 4,
          fontWeight: 'bold',
          color: type == 'Like' ? '#00eda6' : '#FF0060',
          borderWidth: 5,
          borderColor: type == 'Like' ? '#00eda6' : '#FF0060',
          padding: 5,
          borderRadius: 10,
          transform: [{rotate: type == 'Like' ? '-30deg' : '30deg'}],
        }}>
        {type}
      </Text>
    </View>
  );
};

export default TinderLike;
