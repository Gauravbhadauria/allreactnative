import {View, Text, TouchableOpacity, Image, Alert} from 'react-native';
import React, {useEffect} from 'react';
import {SharedElement} from 'react-navigation-shared-element';
import {useNavigation, useRoute} from '@react-navigation/native';
import * as Animatable from 'react-native-animatable';

const Details = () => {
  const route = useRoute();

  const navigation = useNavigation();
  useEffect(() => {
    const unsubscribe = navigation.addListener('beforeRemove', e => {
      return true;
    });

    return unsubscribe;
  }, [navigation]);
  return (
    <View style={{flex: 1}}>
      <SharedElement id={'image' + route.params.image.id}>
        <Image
          source={route.params.image.image}
          style={{width: '100%', height: 400}}
          resizeMode="cover"
        />
      </SharedElement>

      <Animatable.View
        animation={'slideInUp'}
        duration={600}
        style={{
          backgroundColor: '#fff',
          elevation: 5,
          width: '90%',
          alignSelf: 'center',
          borderRadius: 20,
          padding: 20,
        }}>
        <Animatable.Text
          animation={'slideInUp'}
          duration={800}
          style={{fontSize: 20, fontWeight: '600', margin: 10}}>
          What is Lorem Ipsum?
        </Animatable.Text>
        <Animatable.Text
          animation={'slideInUp'}
          duration={1000}
          style={{fontSize: 16, fontWeight: '600', margin: 10}}>
          {
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
          }
        </Animatable.Text>
      </Animatable.View>
    </View>
  );
};

export default Details;
