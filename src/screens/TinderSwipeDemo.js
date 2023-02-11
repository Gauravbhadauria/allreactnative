import {
  View,
  Text,
  Animated,
  PanResponder,
  TouchableOpacity,
  Image,
} from 'react-native';
import React, {useCallback, useEffect, useRef, useState} from 'react';
import TinderCard from '../components/TinderCard';

const TinderSwipeDemo = () => {
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
  }, [data]);
  const swipe = useRef(new Animated.ValueXY()).current;
  const rotate = useRef(new Animated.Value(0)).current;

  const panResponser = PanResponder.create({
    onMoveShouldSetPanResponder: () => true,
    onPanResponderMove: (_, {dx, dy}) => {
      console.log('dx:' + dx + ' dy:' + dy);
      swipe.setValue({x: dx, y: dy});
    },

    onPanResponderRelease: (_, {dx, dy}) => {
      console.log('released:' + 'dx:' + dx + ' dy:' + dy);
      let direction = Math.sign(dx);
      let isActionActive = Math.abs(dx) > 200;
      if (isActionActive) {
        Animated.timing(swipe, {
          toValue: {x: 500 * dx, y: dy},
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
    setData(prepState => prepState.slice(1));
    swipe.setValue({x: 0, y: 0});
  }, [swipe]);

  const handelSelection = useCallback(
    direction => {
      Animated.timing(swipe, {
        toValue: {x: direction * 500, y: 0},
        useNativeDriver: true,
        duration: 500,
      }).start(removeCard);
    },
    [removeCard],
  );
  return (
    <View style={{flex: 1}}>
      {data
        .map((item, index) => {
          let isFirst = index === 0;
          let dragHanlders = isFirst ? panResponser.panHandlers : {};
          return (
            <TinderCard
              item={item}
              rotate={rotate}
              isFirst={isFirst}
              swipe={swipe}
              {...dragHanlders}
            />
          );
        })
        .reverse()}

      <View
        style={{
          width: '100%',
          position: 'absolute',
          height: 100,
          bottom: 0,
          flexDirection: 'row',
          justifyContent: 'space-evenly',
          alignItems: 'center',
        }}>
        <TouchableOpacity
          style={{
            width: 60,
            height: 60,
            backgroundColor: '#fff',
            elevation: 5,
            borderRadius: 30,
            justifyContent: 'center',
            alignItems: 'center',
          }}
          onPress={() => {
            handelSelection(-1);
          }}>
          <Image
            source={require('../images/cancel.png')}
            style={{width: 34, height: 34}}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            width: 60,
            height: 60,
            backgroundColor: '#fff',
            elevation: 5,
            borderRadius: 30,
            justifyContent: 'center',
            alignItems: 'center',
          }}
          onPress={() => {
            handelSelection(1);
          }}>
          <Image
            source={require('../images/heart.png')}
            style={{width: 40, height: 40, tintColor: '#00FFC8'}}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default TinderSwipeDemo;
