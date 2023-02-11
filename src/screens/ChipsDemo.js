import {
  View,
  Text,
  TextInput,
  FlatList,
  Image,
  TouchableOpacity,
} from 'react-native';
import React, {useRef, useState} from 'react';
import {Chip} from 'react-native-paper';

const ChipsDemo = () => {
  const [text, setText] = useState('');
  const [data, setData] = useState([]);
  const inputRef = useRef();
  const addChip = () => {
    let tempData = data;
    tempData.push(text);
    let temp = [];
    tempData.map(item => {
      temp.push(item);
    });
    setData(temp);
    inputRef.current.clear();
  };
  const deleteChip = index => {
    let tempData = data;
    let temp = tempData.filter((item, ind) => {
      return index != ind;
    });
    setData(temp);
  };
  return (
    <View style={{flex: 1}}>
      <TextInput
        placeholder="Type here"
        value={text}
        ref={inputRef}
        onSubmitEditing={() => {
          addChip();
        }}
        onChangeText={txt => setText(txt)}
        style={{
          width: '90%',
          height: 50,
          alignSelf: 'center',
          borderWidth: 1,
          marginTop: 40,
          borderRadius: 20,
          paddingLeft: 20,
        }}
      />
      <View style={{width: '100%', marginTop: 50, alignItems: 'center'}}>
        <FlatList
          data={data}
          numColumns={2}
          renderItem={({item, index}) => {
            return (
              <View
                style={{
                  borderWidth: 0.5,
                  borderRadius: 30,
                  padding: 10,

                  flexDirection: 'row',
                  alignItems: 'center',
                  margin: 10,
                }}>
                <Image
                  source={require('../images/user.png')}
                  style={{width: 30, height: 30}}
                />
                <Text style={{marginLeft: 20, fontSize: 18, fontWeight: '700'}}>
                  {item}
                </Text>
                <TouchableOpacity
                  style={{marginLeft: 20, marginRight: 10}}
                  onPress={() => {
                    deleteChip(index);
                  }}>
                  <Image
                    source={require('../images/close.png')}
                    style={{width: 20, height: 20}}
                  />
                </TouchableOpacity>
              </View>
            );
          }}
        />
      </View>
    </View>
  );
};

export default ChipsDemo;
