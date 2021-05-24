import React, { useState } from 'react'
import { StyleSheet, View, Text, TouchableOpacity, Dimensions } from 'react-native'
import { connect } from 'react-redux'

const _SecondPage = (props) => {

  const [selected, setSelected] = useState('female')

  const { GENDER } = props

  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#07689f'
      }}
    >
      <View style={styles.container}>
        <Text style={styles.title}>Gender</Text>
      </View>

      <View style={styles.container}>
        <View style={{
          alignItems: 'center',
          justifyContent: 'center',
          marginBottom: 30
        }}>
          <TouchableOpacity style={{
            backgroundColor: selected == 'female' ? '#a29bfe' : '#dfe6e9',
            width: 150,
            height: 150,
            borderRadius: 100,
            marginBottom: 20
          }}
            onPress={() => {
              setSelected('female')
              GENDER('female')
            }}
          >

          </TouchableOpacity>
          <Text style={styles.gender}>MOTHER</Text>
        </View>

        <View style={{
          alignItems: 'center',
          justifyContent: 'center',
        }}>
          <TouchableOpacity style={{
            backgroundColor: selected == 'male' ? '#a29bfe' : '#dfe6e9',
            width: 150,
            height: 150,
            borderRadius: 100,
            marginBottom: 20
          }}
            onPress={() => {
              setSelected('male')
              GENDER('male')
            }}
          >

          </TouchableOpacity>
          <Text style={styles.gender}>FATHER</Text>
        </View>
      </View>


    </View>
  );
};

const mapDispatchToProps = (dispatch) => ({
  GENDER: (gender) => {
    dispatch({type: 'GENDER', gender: gender})
  }
})

const SecondPage = connect(null, mapDispatchToProps)(_SecondPage)

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  inputText: {
    height: 40,
    width: Dimensions.get('window').width - 80,
    borderColor: 'white',
    borderWidth: 1,
    paddingLeft: 14,
    borderRadius: 25,
    marginBottom: 15
  },

  title: {
    fontSize: 60,
    textAlign: 'center',
    fontFamily: 'WTR',
    color: '#81ecec',
    letterSpacing: 3
  },

  gender: {
    fontSize: 30,
    fontFamily: 'WTR',
    color: '#dfe6e9',
    letterSpacing: 3
  }
})

export { SecondPage };