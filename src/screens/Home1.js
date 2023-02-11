import {
  View,
  Text,
  Image,
  TouchableOpacity,
  FlatList,
  Dimensions,
  Alert,
} from 'react-native';
import React, {useState} from 'react';
import {SharedElement} from 'react-navigation-shared-element';
import Details from './Details';
import {Swipeable} from 'react-native-gesture-handler';
import Item from '../components/Item';
const {height, width} = Dimensions.get('window');
const Home1 = ({navigation}) => {
  const [data, setData] = useState([
    {image: require('../images/shoes1.webp'), id: 1, opened: false},
    {image: require('../images/shoes2.webp'), id: 2, opened: false},

    {image: require('../images/shoes4.webp'), id: 4, opened: false},
    {image: require('../images/shoes5.webp'), id: 5, opened: false},
    {
      image: require('../images/shoes6.webp'),
      id: 6,
      opened: true,
    },
    {image: require('../images/shoes7.webp'), id: 7, opened: false},
  ]);

  const openCompoent = ind => {
    let tempData = data;
    tempData.map((item, index) => {
      if (index == ind) {
        item.opened = true;
      } else {
        item.opened = false;
      }
    });
    let temp = [];
    tempData.map(item => {
      temp.push(item);
    });
    setData(temp);
  };
  return (
    <View style={{flex: 1}}>
      <FlatList
        data={data}
        renderItem={({item, index}) => {
          return (
            <Item
              item={item}
              index={index}
              onComponentOpen={x => {
                openCompoent(x);
              }}
              onSilent={x => {
                console.log(' silent ' + x);
              }}
              onDelete={x => {
                console.log(' delete ' + x);
              }}
              onEdit={x => {
                console.log(' edit ' + x);
              }}
            />
          );
        }}
      />
    </View>
  );
};

export default Home1;
