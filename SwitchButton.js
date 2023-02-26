import {View, Text, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';

const SwitchButton = () => {
  const [selectedTab, setSelectedTab] = useState(0);
  return (
    <View style={{flex: 1}}>
      <View
        style={{
          width: '90%',
          alignSelf: 'center',
          marginTop: 50,
          height: 60,
          borderWidth: 0.5,
          backgroundColor: 'white',
          borderRadius: 15,
          flexDirection: 'row',
          alignItems: 'center',
          paddingLeft: 5,
          paddingRight: 5,
        }}>
        <TouchableOpacity
          style={{
            width: '50%',
            height: 50,
            backgroundColor: selectedTab == 0 ? 'blue' : 'white',
            borderRadius: 15,
            justifyContent: 'center',
            alignItems: 'center',
          }}
          onPress={() => {
            setSelectedTab(0);
          }}>
          <Text
            style={{
              color: selectedTab == 0 ? '#fff' : '#000',
              fontSize: 18,
              fontWeight: '700',
            }}>
            Pending
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            width: '50%',
            height: 50,
            backgroundColor: selectedTab == 1 ? 'blue' : 'white',
            borderRadius: 15,
            justifyContent: 'center',
            alignItems: 'center',
          }}
          onPress={() => {
            setSelectedTab(1);
          }}>
          <Text
            style={{
              color: selectedTab == 1 ? '#fff' : '#000',
              fontSize: 18,
              fontWeight: '700',
            }}>
            Completed
          </Text>
        </TouchableOpacity>
      </View>
      {selectedTab == 0 ? (
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <Text>Pending</Text>
        </View>
      ) : (
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <Text>Completed</Text>
        </View>
      )}
    </View>
  );
};

export default SwitchButton;
