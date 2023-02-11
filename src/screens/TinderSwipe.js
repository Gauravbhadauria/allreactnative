import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Image,
  Animated,
  PanResponder,
  Dimensions,
} from 'react-native';
import React, {useCallback, useEffect, useRef, useState} from 'react';
import TinderCard from './TinderCard';
const {height, width} = Dimensions.get('window');
const TinderSwipe = () => {
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
  useEffect(() => {
    if (!data.length) {
      setData([
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
        {
          image: require('../images/drstrange.jpeg'),
          id: 7,
          title: 'Dr Strange',
        },
        {
          image: require('../images/blackwidow.jpeg'),
          id: 8,
          title: 'Black Widow',
        },
      ]);
    }
  }, [data.length]);
  const swipe = useRef(new Animated.ValueXY()).current;
  const panResponder = PanResponder.create({
    onMoveShouldSetPanResponder: () => true,
    onPanResponderMove: (_, {dx, dy}) => {
      swipe.setValue({x: dx, y: dy});
    },
    onPanResponderRelease: (_, {dx, dy}) => {
      const direction = Math.sign(dx);
      const isActionActiove = Math.abs(dx) > 200;
      if (isActionActiove) {
        Animated.timing(swipe, {
          toValue: {x: direction * 500, y: dy},
          useNativeDriver: true,

          duration: 500,
        }).start(removeCard);
      } else {
        Animated.spring(swipe, {
          toValue: {x: 0, y: 0},
          useNativeDriver: true,
          friction: 5,
        }).start();
      }
    },
  });
  const removeCard = useCallback(() => {
    setData(prevState => prevState.slice(1));
    swipe.setValue({x: 0, y: 0});
  }, [swipe]);

  const handleChoiceButtons = useCallback(
    direction => {
      Animated.timing(swipe.x, {
        toValue: direction * width,
        duration: 500,
        useNativeDriver: true,
      }).start(removeCard);
    },
    [removeCard, swipe.x],
  );
  return (
    <View style={{flex: 1}}>
      {data
        .map((item, index) => {
          const isFirst = index === 0;
          const dragHandlers = isFirst ? panResponder.panHandlers : {};
          return (
            <TinderCard
              swipe={swipe}
              item={item}
              isFirst={isFirst}
              {...dragHandlers}
            />
          );
        })
        .reverse()}
      <View
        style={{
          position: 'absolute',
          flexDirection: 'row',
          width: '100%',
          justifyContent: 'space-evenly',
          alignItems: 'center',
          bottom: 30,
          zIndex: -1,
        }}>
        <TouchableOpacity
          style={{
            width: 70,
            height: 70,
            borderRadius: 35,
            backgroundColor: '#fff',
            elevation: 5,
            justifyContent: 'center',
            alignItems: 'center',
          }}
          onPress={() => {
            handleChoiceButtons(-1);
          }}>
          <Image
            source={require('../images/cancel.png')}
            style={{width: 34, height: 34, tintColor: '#FF0060'}}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            width: 70,
            height: 70,
            borderRadius: 35,
            backgroundColor: '#fff',
            elevation: 5,
            justifyContent: 'center',
            alignItems: 'center',
          }}
          onPress={() => {
            handleChoiceButtons(1);
          }}>
          <Image
            source={require('../images/heart.png')}
            style={{width: 40, height: 40, tintColor: '#00eda6'}}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default TinderSwipe;
