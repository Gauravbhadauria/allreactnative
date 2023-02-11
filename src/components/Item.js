import {View, Text, TouchableOpacity, Dimensions, Image} from 'react-native';
import React, {useEffect, useRef} from 'react';
import {useNavigation} from '@react-navigation/native';
import {SharedElement} from 'react-navigation-shared-element';
import {Swipeable} from 'react-native-gesture-handler';
const {width, height} = Dimensions.get('window');

const Item = ({item, index, onComponentOpen, onSilent, onDelete, onEdit}) => {
  const navigation = useNavigation();
  const ref = useRef();
  const leftSwipe = () => {
    return (
      <TouchableOpacity
        style={{backgroundColor: '#fff', height: 100, flexDirection: 'row'}}
        onPress={() => {}}>
        <TouchableOpacity
          style={{
            width: 100,
            height: 100,
            backgroundColor: 'red',
            justifyContent: 'center',
            alignItems: 'center',
          }}
          onPress={() => {
            ref.current.close();
            onDelete(index);
          }}>
          <Image
            source={require('../images/delete.png')}
            style={{width: 30, height: 30, tintColor: '#fff'}}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            width: 100,
            height: 100,
            backgroundColor: '#3D7BED',
            justifyContent: 'center',
            alignItems: 'center',
          }}
          onPress={() => {
            ref.current.close();
            onEdit(index);
          }}>
          <Image
            source={require('../images/editing.png')}
            style={{width: 30, height: 30, tintColor: '#fff'}}
          />
        </TouchableOpacity>
      </TouchableOpacity>
    );
  };
  const rightSwipe = () => {
    return (
      <View
        style={{backgroundColor: '#fff', height: 100, flexDirection: 'row'}}>
        <TouchableOpacity
          style={{
            width: 100,
            height: 100,
            backgroundColor: 'green',
            justifyContent: 'center',
            alignItems: 'center',
          }}
          onPress={() => {
            ref.current.close();
            onSilent(index);
          }}>
          <Image
            source={require('../images/silent.png')}
            style={{width: 30, height: 30, tintColor: '#fff'}}
          />
        </TouchableOpacity>
      </View>
    );
  };
  useEffect(() => {
    if (item.opened == false) {
      ref.current.close();
    }
  });
  return (
    <Swipeable
      ref={ref}
      renderLeftActions={leftSwipe}
      renderRightActions={rightSwipe}
      onSwipeableOpen={() => {
        console.log('open');
        onComponentOpen(index);
      }}>
      <TouchableOpacity
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
      </TouchableOpacity>
    </Swipeable>
  );
};

export default Item;
