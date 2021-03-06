import React, { Component, useState } from 'react';
import AsyncStorage from '@react-native-community/async-storage';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableHighlight,
  Image,
  Alert,
  ScrollView,
  KeyboardAvoidingView,
} from 'react-native';
import AREATouchableOpacity from '../../Components/AREATouchableOpacity/AREATouchableOpacity';
import AREAInput from '../../Components/AREAInput/AREAInput';
import axios from 'react-native-axios';

import config from '../../../config.json';

function Register({ navigation }) {
  const [email, setEmail] = useState('fred@fred.fr');
  const [firstName, setFirstName] = useState('fred');
  const [lastName, setLastName] = useState('fred');
  const [password, setPassword] = useState('fred');
  const [confirmPassword, setConfirmPassword] = useState('fred');

  function register() {
    if (confirmPassword != password) {
      Alert.alert('Register', `Error: password was different.`, [{ text: 'OK' }])
      return;

    }
    const data = {
      email,
      password,
      firstname: firstName,
      lastname: lastName
    };
    axios(`${config.address}${config.register}`, {
      method: 'POST',
      data
    }).then(res => {
      console.log(res.data);
      if (res.status == 200) {
        Alert.alert('Register', `Success`, [{ text: 'OK' }])
        AsyncStorage.setItem('AreaToken', res.data.authToken);
        navigation.navigate('Dashboard');
      }
    }).catch(err => {
      console.log(err);
      if (err.status != 200) {
        Alert.alert('Register', `Error: email are already used`, [{ text: 'OK' }])
      }
    })
  }

  return (
    <ScrollView>
      <KeyboardAvoidingView behavior={'position'} enabled>
        <AREAInput
          placeholder={'Email'}
          underlineColorAndroid={'transparent'}
          alignSelf={'stretch'}
          backgroundColor={'#e5e5e5'}
          borderRadius={20}
          margin={10}
          marginTop={50}
          padding={5}
          paddingLeft={10}
          fontSize={20}
          fontWeight={'bold'}
          onChange={setEmail}
          secure={false}
        />
        <AREAInput
          placeholder={'Firstname'}
          underlineColorAndroid={'transparent'}
          alignSelf={'stretch'}
          backgroundColor={'#e5e5e5'}
          borderRadius={20}
          margin={10}
          marginTop={0}
          padding={5}
          paddingLeft={10}
          fontSize={20}
          fontWeight={'bold'}
          onChange={setFirstName}
          secure={false}
        />
        <AREAInput
          placeholder={'lastname'}
          underlineColorAndroid={'transparent'}
          alignSelf={'stretch'}
          backgroundColor={'#e5e5e5'}
          borderRadius={20}
          margin={10}
          marginTop={0}
          padding={5}
          paddingLeft={10}
          fontSize={20}
          fontWeight={'bold'}
          onChange={setLastName}
          secure={false}
        />
        <AREAInput
          placeholder={'Password'}
          underlineColorAndroid={'transparent'}
          alignSelf={'stretch'}
          backgroundColor={'#e5e5e5'}
          borderRadius={20}
          margin={10}
          marginTop={0}
          padding={5}
          paddingLeft={10}
          fontSize={20}
          fontWeight={'bold'}
          onChange={setPassword}
          secure={true}
        />
        <AREAInput
          placeholder={'Confirm Password'}
          underlineColorAndroid={'transparent'}
          alignSelf={'stretch'}
          backgroundColor={'#e5e5e5'}
          borderRadius={20}
          margin={10}
          marginTop={0}
          padding={5}
          paddingLeft={10}
          fontSize={20}
          fontWeight={'bold'}
          onChange={setConfirmPassword}
          secure={true}
        />
        <AREATouchableOpacity
          text={'Register'}
          alignSelf={'stretch'}
          backgroundColor={'#ff0000'}
          borderRadius={20}
          marginRight={10}
          marginLeft={10}
          marginTop={10}
          padding={5}
          paddingLeft={10}
          fontSize={20}
          fontWeight={'bold'}
          color={'#ffffff'}
          textAlign={'center'}
          onPress={() => register()}
        />
        <AREATouchableOpacity
          text={'Login'}
          alignSelf={'stretch'}
          backgroundColor={'#ff0000'}
          borderRadius={20}
          marginRight={10}
          marginLeft={10}
          marginTop={10}
          padding={5}
          paddingLeft={10}
          fontSize={20}
          fontWeight={'bold'}
          color={'#ffffff'}
          textAlign={'center'}
          onPress={() => navigation.navigate('Login')}
        />
      </KeyboardAvoidingView>
    </ScrollView>

    // <View style={styles.container}>
    //   <View style={styles.inputContainer}>
    //     <Image style={styles.inputIcon} />
    //     <TextInput
    //       style={styles.inputs}
    //       placeholder="Name"
    //       underlineColorAndroid="transparent"
    //       onChangeText={name => this.setState({name})}
    //     />

    //     <View style={styles.inputContainer}>
    //       <Image style={styles.inputIcon} />
    //       <TextInput
    //         style={styles.inputs}
    //         placeholder="Lastname"
    //         underlineColorAndroid="transparent"
    //         onChangeText={lastname => this.setState({lastname})}
    //       />
    //     </View>

    //     <View style={styles.inputContainer}>
    //       <Image style={styles.inputIcon} />
    //       <TextInput
    //         style={styles.inputs}
    //         placeholder="Email"
    //         keyboardType="email-address"
    //         underlineColorAndroid="transparent"
    //         onChangeText={email => this.setState({email})}
    //       />

    //       <View style={styles.inputContainer}>
    //         <Image style={styles.inputIcon} />
    //         <TextInput
    //           style={styles.inputs}
    //           placeholder="Password"
    //           secureTextEntry={true}
    //           underlineColorAndroid="transparent"
    //           onChangeText={password => this.setState({password})}
    //         />
    //       </View>

    //       <View style={styles.inputContainer}>
    //         <Image style={styles.inputIcon} />
    //         <TextInput
    //           style={styles.inputs}
    //           placeholder="Confirm Password"
    //           secureTextEntry={true}
    //           underlineColorAndroid="transparent"
    //           onChangeText={confpassword => this.setState({confpassword})}
    //         />
    //       </View>

    //       <TouchableHighlight
    //         style={[styles.buttonContainer, styles.loginButton]}
    //         onPress={() => this.onClickListener('register')}>
    //         <Text style={styles.loginText}>Register</Text>
    //       </TouchableHighlight>

    //       <TouchableHighlight
    //         style={styles.buttonContainer}
    //         onPress={() => this.onClickListener('login')}>
    //         <Text>Login</Text>
    //       </TouchableHighlight>
    //     </View>
    //   </View>
    // </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#A9A9A9',
  },
  inputContainer: {
    borderBottomColor: '#696969',
    backgroundColor: '#696969',
    borderRadius: 30,
    borderBottomWidth: 1,
    width: 250,
    height: 45,
    marginBottom: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  inputs: {
    height: 45,
    marginLeft: 16,
    borderBottomColor: '#FEFEFE',
    flex: 1,
  },
  inputIcon: {
    width: 30,
    height: 30,
    marginLeft: 15,
    justifyContent: 'center',
  },
  buttonContainer: {
    height: 45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
    width: 250,
    borderRadius: 30,
  },
  loginButton: {
    backgroundColor: '#ED2425',
  },
  loginText: {
    color: 'white',
  },
});

export default Register;
