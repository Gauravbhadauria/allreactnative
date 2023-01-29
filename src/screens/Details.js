import {View, Text, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import {SharedElement} from 'react-navigation-shared-element';
import {useRoute} from '@react-navigation/native';

const Details = () => {
  const route = useRoute();
  return (
    <View style={{flex: 1}}>
      <SharedElement id={'image' + route.params.image.id}>
        <Image
          source={route.params.image.image}
          style={{width: '100%', height: 400}}
          resizeMode="cover"
        />
      </SharedElement>

      <Text style={{fontSize: 20, fontWeight: '600', margin: 10}}>
        What is Lorem Ipsum?
      </Text>
      <Text style={{fontSize: 16, fontWeight: '600', margin: 10}}>
        {
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
        }
      </Text>
    </View>
  );
};

export default Details;
