// import {
//   View,
//   Text,
//   StyleSheet,
//   TextInput,
//   TouchableOpacity,
// } from 'react-native';
// import React, {useState} from 'react';

// const Login = () => {
//   const [emailFocused, setEmailFocused] = useState(false);
//   const [passwordFocused, setPasswordFocused] = useState(false);
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [badEmail, setBadEmail] = useState(false);
//   const [badPassword, setBadPassword] = useState(false);

//   const validate = () => {
//     let validity = true;
//     if (
//       !String(email)
//         .toLowerCase()
//         .match(
//           /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
//         )
//     ) {
//       setBadEmail(true);
//       validity = false;
//     }
//     if (password == '' || password.length < 5) {
//       setBadPassword(true);
//       validity = false;
//     }
//     return validity;
//   };
//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>Login</Text>
//       <TextInput
//         value={email}
//         onChangeText={txt => setEmail(txt)}
//         onFocus={() => {
//           setEmailFocused(true);
//           setPasswordFocused(false);
//         }}
//         style={[styles.input, {borderColor: emailFocused ? 'blue' : 'black'}]}
//         placeholder="Enter Email Id"
//       />
//       <TextInput
//         value={password}
//         onChangeText={txt => setPassword(txt)}
//         onFocus={() => {
//           setEmailFocused(false);
//           setPasswordFocused(true);
//         }}
//         style={[
//           styles.input,
//           {marginTop: 20, borderColor: passwordFocused ? 'blue' : 'black'},
//         ]}
//         placeholder="Enter Password"
//       />
//       <TouchableOpacity
//         disabled={validate()}
//         style={[
//           styles.loginBtn,
//           {
//             backgroundColor: validate() ? 'blue' : '#979797',
//           },
//         ]}>
//         <Text style={styles.loginBtnTxt}>Login</Text>
//       </TouchableOpacity>
//     </View>
//   );
// };

// export default Login;
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//   },
//   title: {
//     fontSize: 30,
//     alignSelf: 'center',
//     marginTop: 30,
//     fontWeight: '600',
//     color: '#000',
//   },
//   input: {
//     width: '90%',
//     height: 55,
//     borderWidth: 1,
//     borderRadius: 15,
//     alignSelf: 'center',
//     marginTop: 100,
//     paddingLeft: 20,
//   },
//   loginBtn: {
//     width: '90%',
//     height: 55,

//     alignSelf: 'center',
//     marginTop: 50,
//     borderRadius: 20,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   loginBtnTxt: {
//     color: '#fff',
//     fontSize: 17,
//   },
// });
