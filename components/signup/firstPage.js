import React, { useState } from 'react';
import { StyleSheet, View, Text, TextInput, Dimensions, KeyboardAvoidingView, Platform } from 'react-native'
import { connect } from 'react-redux'

const _FirstPage = (props) => {

  const [signUpForm, setSignUpForm] = useState({
    type: 'PERSONAL_INFOS',
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    nationality: '',
    phoneNumber: '',
  })

  const { PERSONAL_INFOS } = props


  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#07689f'
      }}
    >
      <View style={{
        flexGrow: 1,
        alignItems: 'center',
        justifyContent: 'center'
      }}>
        <Text style={styles.title}>Personal Information</Text>
      </View>

      <KeyboardAvoidingView style={{
        flexGrow: 1,
        alignItems: 'center',
        justifyContent: 'center'
      }}
        behavior="padding"
        enabled
      >

        <TextInput
          style={styles.inputText}
          onChangeText={(firstName) => {
            setSignUpForm({ ...signUpForm, firstName: firstName })
            PERSONAL_INFOS(signUpForm)
          }}
          placeholder='First Name'
          placeholderTextColor='rgba(236, 240, 241,0.5)'
        />

        <TextInput
          style={styles.inputText}
          onChangeText={lastName => {
            setSignUpForm({ ...signUpForm, lastName: lastName })
            PERSONAL_INFOS(signUpForm)
          }}
          placeholder='Last Name'
          placeholderTextColor='rgba(236, 240, 241,0.5)'
        />

        <TextInput
          style={styles.inputText}
          onChangeText={nationality => {
            setSignUpForm({ ...signUpForm, nationality: nationality })
            PERSONAL_INFOS(signUpForm)
          }}
          placeholder='Nationality'
          placeholderTextColor='rgba(236, 240, 241,0.5)'
        />

        <TextInput
          style={styles.inputText}
          onChangeText={phoneNumber => {
            setSignUpForm({ ...signUpForm, phoneNumber: phoneNumber })
            PERSONAL_INFOS(signUpForm)
          }}
          placeholder='Phone Number'
          placeholderTextColor='rgba(236, 240, 241,0.5)'
          keyboardType={Platform.OS == 'ios' ? 'phone-pad' : 'numeric'}
        />

        <TextInput
          style={styles.inputText}
          onChangeText={email => {
            setSignUpForm({ ...signUpForm, email: email })
            PERSONAL_INFOS(signUpForm)
          }}
          placeholder='Email'
          placeholderTextColor='rgba(236, 240, 241,0.5)'
          keyboardType='email-address'
        />

        <TextInput
          style={styles.inputText}
          onChangeText={password => {
            setSignUpForm({ ...signUpForm, password: password })
            PERSONAL_INFOS(signUpForm)
          }}
          placeholder='Password'
          placeholderTextColor='rgba(236, 240, 241,0.5)'
          secureTextEntry
        />
      </KeyboardAvoidingView>
    </View>
  );
};

const mapDispatchToProps = (dispatch) => ({
  PERSONAL_INFOS: (obj) => {
    dispatch(obj)
  }
})

const FirstPage = connect(null, mapDispatchToProps)(_FirstPage)


const styles = StyleSheet.create({
  inputText: {
    height: 40,
    color: 'white',
    width: Dimensions.get('window').width - 80,
    borderColor: 'white',
    borderWidth: 1,
    paddingLeft: 14,
    borderRadius: 25,
    marginBottom: 15
  },

  title: {
    fontSize: 50,
    paddingTop: 30,
    textAlign: 'center',
    fontFamily: 'WTR',
    color: '#81ecec',
    letterSpacing: 3
  },
})

export { FirstPage };