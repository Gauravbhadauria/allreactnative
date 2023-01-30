import {
  View,
  Text,
  Image,
  TouchableOpacity,
  FlatList,
  Dimensions,
} from 'react-native';
import React, {useState} from 'react';
import {SharedElement} from 'react-navigation-shared-element';
import Details from './Details';
const {height, width} = Dimensions.get('window');
const Home1 = ({navigation}) => {
  const [data, setData] = useState([
    {image: require('../images/shoes1.webp'), id: 1},
    {image: require('../images/shoes2.webp'), id: 2},

    {image: require('../images/shoes4.webp'), id: 4},
    {image: require('../images/shoes5.webp'), id: 5},
    {
      image: require('../images/shoes6.webp'),
      id: 6,
    },
    {image: require('../images/shoes7.webp'), id: 7},
  ]);
  return (
    <View style={{flex: 1}}>
      <FlatList
        data={data}
        renderItem={({item, index}) => {
          return (
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
          );
        }}
      />
    </View>
  );
};

export default Home1;
