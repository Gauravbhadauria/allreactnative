import {
  View,
  Text,
  Modal,
  ActivityIndicator,
  TouchableOpacity,
  Image,
  TextInput,
  FlatList,
} from 'react-native';
import React, {useState} from 'react';

const AllModals = () => {
  const [visible, setVisible] = useState(false);
  return (
    <TouchableOpacity
      style={{flex: 1, backgroundColor: 'orange'}}
      onPress={() => {
        setVisible(true);
      }}>
      {/* <Modal visible={visible} transparent>
       
        <TouchableOpacity
          style={{
            flex: 1,
            backgroundColor: 'rgba(0,0,0,0.5)',
            justifyContent: 'center',
            alignItems: 'center',
          }}
          onPress={() => {
            setVisible(false);
          }}>
          
          <View
            style={{
              width: '90%',
              height: 320,

              borderRadius: 10,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <View
              style={{
                width: '90%',
                height: 240,
                backgroundColor: '#fff',
                borderRadius: 10,
              }}>
              <Text
                style={{
                  marginTop: 70,
                  alignSelf: 'center',
                  fontSize: 25,
                  color: '#000',
                  fontWeight: '600',
                }}>
                Please Rate Our App{' '}
              </Text>
              <View
                style={{
                  width: '100%',
                  flexDirection: 'row',
                  justifyContent: 'space-evenly',
                  alignItems: 'center',
                  height: 60,
                }}>
                <Image
                  source={require('../images/rating.png')}
                  style={{width: 24, height: 24}}
                />
                <Image
                  source={require('../images/rating.png')}
                  style={{width: 24, height: 24}}
                />
                <Image
                  source={require('../images/rating.png')}
                  style={{width: 24, height: 24}}
                />
                <Image
                  source={require('../images/rating.png')}
                  style={{width: 24, height: 24}}
                />
                <Image
                  source={require('../images/rating.png')}
                  style={{width: 24, height: 24}}
                />
              </View>
              <TouchableOpacity
                style={{
                  borderRadius: 15,
                  paddingLeft: 20,
                  paddingRight: 20,
                  paddingTop: 10,
                  paddingBottom: 10,
                  borderWidth: 0.5,
                  alignSelf: 'center',
                  marginTop: 20,
                }}>
                <Text>Skip</Text>
              </TouchableOpacity>
            </View>
            <Image
              source={require('../images/logo_rating.png')}
              style={{
                width: 100,
                height: 100,
                alignSelf: 'center',
                position: 'absolute',
                top: -10,
              }}
            />
          </View>
        </TouchableOpacity>
      </Modal> */}
      <Modal visible={visible} transparent>
        {/* parent view */}
        <View
          style={{
            flex: 1,
            backgroundColor: 'rgba(0,0,0,0.5)',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          {/* child view */}
          <View
            style={{
              height: '100%',
              width: '100%',

              borderRadius: 10,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <View
              style={{
                flex: 1,
                height: '100%',
                width: '100%',
                backgroundColor: '#fff',
                borderRadius: 10,
              }}>
              <TextInput
                placeholder="Seach Here.."
                style={{
                  width: '90%',
                  height: 50,
                  borderRadius: 15,
                  borderWidth: 0.5,
                  alignSelf: 'center',
                  paddingLeft: 15,
                  marginTop: 60,
                }}
              />
              <FlatList
                data={[1, , 1, 1, 1, 1]}
                renderItem={({item, index}) => {
                  return (
                    <View
                      style={{
                        width: '90%',
                        height: 50,
                        borderBottomWidth: 0.5,
                        alignSelf: 'center',
                        paddingLeft: 20,
                        justifyContent: 'center',
                      }}>
                      <Text>{'item ' + (index + 1)}</Text>
                    </View>
                  );
                }}
              />
              <TouchableOpacity
                style={{position: 'absolute', top: 20, right: 20}}
                onPress={() => {
                  setVisible(false);
                }}>
                <Image
                  source={require('../images/close.png')}
                  style={{width: 24, height: 24}}
                />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </TouchableOpacity>
  );
};

export default AllModals;
