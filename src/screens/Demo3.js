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
const Demo3 = ({navigation}) => {
  const [data, setData] = useState([
    {image: require('../images/burger.png'), id: 1},
    {image: require('../images/pizza.png'), id: 2},

    {image: require('../images/momos.png'), id: 4},
    {image: require('../images/samosa.png'), id: 5},
    {
      image: require('../images/pasta.png'),
      id: 6,
    },
  ]);
  return (
    <View style={{flex: 1, backgroundColor: '#303030'}}>
      <FlatList
        data={data}
        renderItem={({item, index}) => {
          return (
            <TouchableOpacity
              style={{
                width: width,
                marginBottom: 10,
                backgroundColor: '#303030',
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
                  resizeMode="contain"
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

export default Demo3;
