import {View, Text, TouchableOpacity, Dimensions, Image} from 'react-native';
import React, {useEffect, useRef} from 'react';
import {useNavigation} from '@react-navigation/native';
import {SharedElement} from 'react-navigation-shared-element';
import {Swipeable} from 'react-native-gesture-handler';
const {width, height} = Dimensions.get('window');
const Item = ({item, index, onOpenComponent}) => {
  const navigation = useNavigation();
  const ref = useRef();
  const leftSwipe = () => {
    return (
      <View
        style={{
          height: 100,
          flexDirection: 'row',
        }}>
        <TouchableOpacity
          style={{
            backgroundColor: 'red',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text style={{color: '#fff', paddingLeft: 20, paddingRight: 20}}>
            Delete
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            backgroundColor: 'blue',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text style={{color: '#fff', paddingLeft: 20, paddingRight: 20}}>
            Edit
          </Text>
        </TouchableOpacity>
      </View>
    );
  };
  useEffect(() => {
    console.log(item.opened);
    if (item.opened == false) {
      ref.current.close();
    }
  });
  return (
    <Swipeable
      renderLeftActions={leftSwipe}
      ref={ref}
      friction={2}
      onSwipeableOpen={() => {
        console.log('open');
        onOpenComponent(index);
      }}>
      <View
        style={{
          width: width,
          marginBottom: 10,
          backgroundColor: '#F4F4F4',
          flexDirection: 'row',
          alignItems: 'center',
        }}
        onPress={() => {
          navigation.navigate('Details', {image: item});
        }}>
        <SharedElement id={'image' + item.id}>
          <Image
            source={item.image}
            style={{
              width: 100,
              alignSelf: 'flex-start',
              height: 100,
              marginLeft: 20,
            }}
            resizeMode="cover"
          />
        </SharedElement>

        <Text style={{fontSize: 16, fontWeight: '600', marginLeft: 20}}>
          {'Shoes ' + (index + 1)}
        </Text>
      </View>
    </Swipeable>
  );
};

export default Item;
