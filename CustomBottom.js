import {View, Text, Touchable, TouchableOpacity, Image} from 'react-native';
import React, {useState} from 'react';
import Modal from 'react-native-modal';

const CustomBottom = () => {
  const [visible, setVisible] = useState(false);
  return (
    <View
      backdropOpacity={0.2}
      style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <TouchableOpacity
        style={{
          width: 100,
          height: 100,
          borderRadius: 50,
          backgroundColor: '#000',
          justifyContent: 'center',
          alignItems: 'center',
        }}
        onPress={() => {
          setVisible(true);
        }}>
        <Text style={{fontSize: 35, fontWeight: '700', color: '#fff'}}>+</Text>
      </TouchableOpacity>
      <Modal
        animationIn={'slideInUp'}
        animationInTiming={500}
        style={{width: '100%', marginLeft: 0, marginBottom: 0}}
        onBackButtonPress={() => {
          setVisible(false);
        }}
        isVisible={visible}>
        <View
          style={{
            position: 'absolute',
            bottom: 0,
            right: 0,
            left: 0,

            backgroundColor: '#fff',
            width: '100%',
          }}>
          <TouchableOpacity
            style={{
              width: '100%',
              height: 50,
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <Image
              source={require('./src/images/camera.png')}
              style={{
                width: 24,
                height: 24,
                tintColor: 'green',
                marginLeft: 10,
              }}
            />
            <Text
              style={{
                color: '#000',
                marginLeft: 15,
                fontSize: 18,
                fontWeight: '600',
              }}>
              Camera
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              width: '100%',
              height: 50,
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <Image
              source={require('./src/images/image.png')}
              style={{
                width: 24,
                height: 24,
                tintColor: 'red',
                marginLeft: 10,
              }}
            />
            <Text
              style={{
                color: '#000',
                marginLeft: 15,
                fontSize: 18,
                fontWeight: '600',
              }}>
              Gallery
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              width: '100%',
              height: 50,
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <Image
              source={require('./src/images/notes.png')}
              style={{
                width: 24,
                height: 24,
                tintColor: 'orange',
                marginLeft: 10,
              }}
            />
            <Text
              style={{
                color: '#000',
                marginLeft: 15,
                fontSize: 18,
                fontWeight: '600',
              }}>
              Notes
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              width: '100%',
              height: 50,
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <Image
              source={require('./src/images/files.png')}
              style={{
                width: 24,
                height: 24,
                tintColor: 'purple',
                marginLeft: 10,
              }}
            />
            <Text
              style={{
                color: '#000',
                marginLeft: 15,
                fontSize: 18,
                fontWeight: '600',
              }}>
              File
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              width: '100%',
              height: 50,
              flexDirection: 'row',
              alignItems: 'center',
              marginBottom: 10,
            }}>
            <Image
              source={require('./src/images/docs.png')}
              style={{
                width: 24,
                height: 24,
                tintColor: 'green',
                marginLeft: 10,
              }}
            />
            <Text
              style={{
                color: '#000',
                marginLeft: 15,
                fontSize: 18,
                fontWeight: '600',
              }}>
              Document
            </Text>
          </TouchableOpacity>
        </View>
      </Modal>
    </View>
  );
};

export default CustomBottom;
