import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  TouchableOpacity,
  RefreshControl,
  ActivityIndicator,
} from 'react-native';
import React, {useEffect, useState} from 'react';

const AllFlatlist = () => {
  const [products, setProducts] = useState([
    'black',
    'red',
    'blue',
    'orange',
    'purple',
    'cyan',
    'green',
  ]);
  const [loading, setLoading] = useState(false);

  const loadMore = () => {
    setLoading(true);
    let tempData = products;
    // api hit for new data

    tempData.push(...products);
    setProducts(tempData);
    setLoading(false);
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={products}
        onEndReachedThreshold={60}
        ListFooterComponent={({item, index}) => {
          return (
            <View>
              {loading && (
                <View
                  style={{
                    width: '100%',
                    height: 50,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <ActivityIndicator />
                </View>
              )}
            </View>
          );
        }}
        onEndReached={() => {
          loadMore();
        }}
        renderItem={({item, index}) => {
          return <View style={{backgroundColor: item, height: 200}}></View>;
        }}
      />
    </View>
  );
};

export default AllFlatlist;
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  itemView: {
    width: '80%',
    height: 120,
    backgroundColor: '#fff',

    elevation: 5,

    borderRadius: 10,
    marginTop: 20,
  },
  productImage: {
    width: 100,
    height: 100,
    alignSelf: 'center',
  },
  nameView: {
    paddingLeft: 20,
    paddingRight: 10,
    width: '100%',
  },
  price: {
    fontSize: 20,
    fontWeight: '600',
    color: 'green',
    marginTop: 10,
  },
});
