import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Alert,
} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';

const Otp = () => {
  const et1 = useRef();
  const et2 = useRef();
  const et3 = useRef();
  const et4 = useRef();
  const et5 = useRef();
  const et6 = useRef();
  const [f1, setF1] = useState('');
  const [f2, setF2] = useState('');
  const [f3, setF3] = useState('');
  const [f4, setF4] = useState('');
  const [f5, setF5] = useState('');
  const [f6, setF6] = useState('');
  const [count, setCount] = useState(60);
  useEffect(() => {
    const interval = setInterval(() => {
      if (count == 0) {
        clearInterval(interval);
      } else {
        setCount(count - 1);
      }
    }, 1000);
    return () => {
      clearInterval(interval);
    };
  }, [count]);
  const otpValidate = () => {
    let otp = '123456';
    let enteredOtp = f1 + f2 + f3 + f4 + f5 + f6;
    if (enteredOtp == otp) {
      Alert.alert('OTP Matched');
    } else {
      Alert.alert('Wrong OTP');
    }
  };
  return (
    <View style={styles.conatainer}>
      <Text style={styles.title}> OTP Verification</Text>
      <View style={styles.otpView}>
        <TextInput
          ref={et1}
          style={[
            styles.inputView,
            {borderColor: f1.length >= 1 ? 'blue' : '#000'},
          ]}
          keyboardType="number-pad"
          maxLength={1}
          value={f1}
          onChangeText={txt => {
            setF1(txt);
            if (txt.length >= 1) {
              et2.current.focus();
            }
          }}
        />
        <TextInput
          ref={et2}
          style={[
            styles.inputView,
            {borderColor: f2.length >= 1 ? 'blue' : '#000'},
          ]}
          keyboardType="number-pad"
          maxLength={1}
          value={f2}
          onChangeText={txt => {
            setF2(txt);
            if (txt.length >= 1) {
              et3.current.focus();
            } else if (txt.length < 1) {
              et1.current.focus();
            }
          }}
        />
        <TextInput
          ref={et3}
          style={[
            styles.inputView,
            {borderColor: f3.length >= 1 ? 'blue' : '#000'},
          ]}
          keyboardType="number-pad"
          maxLength={1}
          value={f3}
          onChangeText={txt => {
            setF3(txt);
            if (txt.length >= 1) {
              et4.current.focus();
            } else if (txt.length < 1) {
              et2.current.focus();
            }
          }}
        />
        <TextInput
          ref={et4}
          style={[
            styles.inputView,
            {borderColor: f4.length >= 1 ? 'blue' : '#000'},
          ]}
          keyboardType="number-pad"
          maxLength={1}
          value={f4}
          onChangeText={txt => {
            setF4(txt);
            if (txt.length >= 1) {
              et5.current.focus();
            } else if (txt.length < 1) {
              et3.current.focus();
            }
          }}
        />
        <TextInput
          ref={et5}
          style={[
            styles.inputView,
            {borderColor: f5.length >= 1 ? 'blue' : '#000'},
          ]}
          keyboardType="number-pad"
          maxLength={1}
          value={f5}
          onChangeText={txt => {
            setF5(txt);
            if (txt.length >= 1) {
              et6.current.focus();
            } else if (txt.length < 1) {
              et4.current.focus();
            }
          }}
        />
        <TextInput
          ref={et6}
          style={[
            styles.inputView,
            {borderColor: f6.length >= 1 ? 'blue' : '#000'},
          ]}
          keyboardType="number-pad"
          maxLength={1}
          value={f6}
          onChangeText={txt => {
            setF6(txt);
            if (txt.length >= 1) {
              et6.current.focus();
            } else if (txt.length < 1) {
              et5.current.focus();
            }
          }}
        />
      </View>
      <View style={styles.resendView}>
        <Text
          style={{
            fontSize: 20,
            fontWeight: '700',
            color: count == 0 ? 'blue' : 'gray',
          }}
          onPress={() => {
            setCount(60);
          }}>
          Resend
        </Text>
        {count !== 0 && (
          <Text style={{marginLeft: 20, fontSize: 20}}>
            {count + ' seconds'}
          </Text>
        )}
      </View>
      <TouchableOpacity
        disabled={
          f1 !== '' &&
          f2 !== '' &&
          f3 !== '' &&
          f4 !== '' &&
          f5 !== '' &&
          f6 !== ''
            ? false
            : true
        }
        style={[
          styles.verifyOtpBtn,
          {
            backgroundColor:
              f1 !== '' &&
              f2 !== '' &&
              f3 !== '' &&
              f4 !== '' &&
              f5 !== '' &&
              f6 !== ''
                ? 'blue'
                : '#949494',
          },
        ]}
        onPress={() => otpValidate()}>
        <Text style={styles.btnTxt}>Verify OTP</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Otp;
const styles = StyleSheet.create({
  conatainer: {flex: 1},
  title: {
    fontSize: 22,
    fontWeight: '700',
    marginTop: 100,
    alignSelf: 'center',
    color: '#000',
  },
  otpView: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    marginTop: 100,
  },
  inputView: {
    width: 50,
    height: 50,
    borderWidth: 0.5,
    borderRadius: 10,
    marginLeft: 10,
    textAlign: 'center',
    fontSize: 18,
    fontWeight: '700',
  },
  verifyOtpBtn: {
    width: '90%',
    height: 55,
    backgroundColor: 'blue',
    borderRadius: 20,
    alignSelf: 'center',
    marginTop: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnTxt: {
    color: '#fff',
    fontSize: 20,
  },
  resendView: {
    flexDirection: 'row',
    alignSelf: 'center',
    marginTop: 30,
    marginBottom: 30,
  },
});
