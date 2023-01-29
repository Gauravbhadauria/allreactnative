import {View, Text, Image, TouchableOpacity, FlatList} from 'react-native';
import React, {useState} from 'react';
import {SharedElement} from 'react-navigation-shared-element';
import Details from './Details';

const Home = ({navigation}) => {
  const [data, setData] = useState([
    {image: require('../images/hulk.webp'), id: 1, title: 'Hulk'},
    {image: require('../images/ironman.webp'), id: 2, title: 'Ironman'},
    {image: require('../images/thor.jpeg'), id: 3, title: 'Thor'},
    {image: require('../images/superman.webp'), id: 4, title: 'Superman'},
    {image: require('../images/groot.webp'), id: 5, title: 'Groot'},
    {
      image: require('../images/blackpanther.webp'),
      id: 6,
      title: 'Black Panther',
    },
    {image: require('../images/drstrange.jpeg'), id: 7, title: 'Dr Strange'},
    {image: require('../images/blackwidow.jpeg'), id: 8, title: 'Black Widow'},
  ]);
  return (
    <View style={{flex: 1}}>
      <FlatList
        data={data}
        numColumns={2}
        renderItem={({item, index}) => {
          return (
            <TouchableOpacity
              style={{width: '50%'}}
              onPress={() => {
                navigation.navigate('Details', {image: item});
              }}>
              <SharedElement id={'image' + item.id}>
                <Image
                  source={item.image}
                  style={{width: '100%', height: 150}}
                  resizeMode="cover"
                />
              </SharedElement>
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};

export default Home;
