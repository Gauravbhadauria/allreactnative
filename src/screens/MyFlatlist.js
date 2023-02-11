import {View, Text, ScrollView, FlatList} from 'react-native';
import React, {useEffect, useState} from 'react';

const MyFlatlist = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    getData();
  }, []);
  const getData = () => {
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(json => setData(json));
  };
  return (
    <View style={{flex: 1}}>
      <FlatList
        data={data}
        keyExtractor={(item, index) => item.id}
        onScroll={e => {
          const y = e.nativeEvent.contentOffset.y;
          console.log(y);
        }}
        
        renderItem={({item, index}) => {
          return (
            <View
              style={{
                width: '100%',
                height: 100,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Text>{item.category}</Text>
            </View>
          );
        }}
        ListFooterComponent={({item, index}) => {
          return (
            <View
              style={{
                width: '100%',
                height: 50,
                backgroundColor: 'white',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Text>v2.0.1</Text>
            </View>
          );
        }}
        ListHeaderComponent={({item, index}) => {
          return (
            <View
              style={{
                width: '100%',
                height: 50,
                backgroundColor: 'black',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Text style={{color: '#fff'}}>List OF Items</Text>
            </View>
          );
        }}
      />
    </View>
  );
};

export default MyFlatlist;
