import React, { useState } from 'react'
import { StyleSheet, View, Text, Platform, Button, Dimensions } from 'react-native'
import DateTimePicker from '@react-native-community/datetimepicker'
import { connect } from 'react-redux'

const _ThirdPage = (props) => {

  const [date, setDate] = useState(new Date());
  const [mode, setMode] = useState('date');
  const [show, setShow] = useState(false);

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === 'ios');
    setDate(currentDate);
    BIRTHDAY(currentDate.getDate() + '/' + (currentDate.getMonth()+1) + '/' + currentDate.getFullYear())
  };

  const { BIRTHDAY } = props

  return (
    <View style={styles.container}>
      <View style={{
        flexGrow: 1,
        justifyContent: 'center',
        alignItems: 'center'
      }}>
        <Text style={styles.title}>Birthday</Text>
      </View>

      <View style={{
        flexGrow: 1,
        justifyContent: 'center',
        alignItems: 'center'
      }}>
        <DateTimePicker
          testID="dateTimePicker"
          value={date}
          mode={mode}
          is24Hour={true}
          display="spinner"
          onChange={onChange}
          style={{
            width: Dimensions.get('window').width - 80,
          }}
          textColor='white'
          maximumDate={new Date()}
        />
      </View>
    </View>
  );
};

const mapDispatchToProps = (dispatch) => ({
  BIRTHDAY: (date) => {
    dispatch({type: 'BIRTHDAY', birthday: date})
  }
})

const ThirdPage = connect(null, mapDispatchToProps)(_ThirdPage)

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#07689f'
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

export {ThirdPage};