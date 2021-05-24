import React, { useState, useEffect } from 'react'
import { StyleSheet, View, Text, Dimensions, Image } from 'react-native'
import * as ImagePicker from 'expo-image-picker';
import { TouchableOpacity } from 'react-native-gesture-handler'
import { connect } from 'react-redux'

const _FifthPage = (props) => {

  const [parentImage, setParentImage] = useState(null);

  const family_avatar = require('../../assets/images/father_avatar.png')

  const { PARENT_IMAGE } = props

  useEffect(() => {
    (async () => {
      if (Platform.OS !== 'web') {
        const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (status !== 'granted') {
          alert('Sorry, we need camera roll permissions to make this work!');
        }
      }
    })();

    PARENT_IMAGE('../../assets/images/father_avatar.png')
  }, []);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.cancelled) {
      setParentImage(result.uri);
      PARENT_IMAGE(result.uri)
    }
  };

  return (
    <View style={styles.container}>
      <View style={{
        justifyContent: 'center',
        alignItems: 'center'
      }}>
        <Text style={styles.title}>Parent Photo</Text>
      </View>

      <TouchableOpacity style={{
        justifyContent: 'center',
        alignItems: 'center'
      }} onPress={pickImage}>
        <Image source={parentImage !== null ? { uri: parentImage } : family_avatar} style={{ width: 200, height: 200, borderRadius: 100, marginTop: 100 }} />
        <Text style={{ textAlign: 'center', color: 'yellow', margin: 50 }}>Select a real photo containing your face</Text>
      </TouchableOpacity>

    </View>
  );
};

const mapDispatchToProps = (dispatch) => ({
  PARENT_IMAGE: (parentPhoto) => {
    dispatch({ type: 'PARENT_IMAGE', parentSelfie: parentPhoto })
  }
})

const FifthPage = connect(null, mapDispatchToProps)(_FifthPage)

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

  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },

  gender: {
    fontSize: 20,
    color: 'black',
    letterSpacing: 3
  }
})

export {FifthPage};