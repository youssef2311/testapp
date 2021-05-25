import { StatusBar } from 'expo-status-bar';

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  Alert,
  ScrollView,
  FlatList,
  SafeAreaView
} from 'react-native';
import twilio from './indexx';
import { LinearGradient } from 'expo-linear-gradient';
import { connect } from 'react-redux'
import { Ionicons, MaterialIcons } from '@expo/vector-icons';
import { List, ListItem, SearchBar } from "react-native-elements";
//     <Ionicons.Button name="call" size={24} color="black" />
//    <MaterialIcons.Button name="video-call" size={24} color="black" />
import { TwiRoomView, TwiPreview, TwiRemoteView, RemoteParticipant } from 'react-native-twilio-video'
import RNCallKeep from './keepcall';
import { Button } from 'react-native-elements/dist/buttons/Button';




export default class _Connected extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      calls: [
        { id: 1, name: "Mark Doe", date: "12 jan", time: '11:14 am', video: false, image: "https://bootdey.com/img/Content/avatar/avatar7.png" },
        { id: 2, name: "Clark Man", date: "12 jul", time: '15:58 am', video: false, image: "https://bootdey.com/img/Content/avatar/avatar6.png" },
        { id: 3, name: "Jaden Boor", date: "12 aug", time: '12:45 am', video: true, image: "https://bootdey.com/img/Content/avatar/avatar5.png" },
        { id: 4, name: "Srick Tree", date: "12 feb", time: '08:32 am', video: false, image: "https://bootdey.com/img/Content/avatar/avatar4.png" },
        { id: 5, name: "John Doe", date: "12 oct", time: '07:45 am', video: true, image: "https://bootdey.com/img/Content/avatar/avatar3.png" },
        { id: 6, name: "John Doe", date: "12 jan", time: '09:54 am', video: false, image: "https://bootdey.com/img/Content/avatar/avatar2.png" },
        { id: 8, name: "John Doe", date: "12 jul", time: '11:22 am', video: true, image: "https://bootdey.com/img/Content/avatar/avatar1.png" },
        { id: 9, name: "John Doe", date: "12 aug", time: '13:33 am', video: false, image: "https://bootdey.com/img/Content/avatar/avatar4.png" },
        { id: 10, name: "John Doe", date: "12 oct", time: '11:58 am', video: true, image: "https://bootdey.com/img/Content/avatar/avatar7.png" },
        { id: 11, name: "John Doe", date: "12 jan", time: '09:28 am', video: false, image: "https://bootdey.com/img/Content/avatar/avatar1.png" },
      ]
    };
  }
  // _onPressButton() {
  //   ()
  // }




  renderItem = ({ item }) => {

    var callIcon = "https://img.icons8.com/color/48/000000/phone.png";

    if (item.video == true) {
      callIcon = "https://img.icons8.com/color/48/000000/video-call.png";
    }
    return (

      <View style={styles.row}>
        <Image source={{ uri: item.image }} style={styles.pic} />
        <View>
          <View style={styles.nameContainer}>
            <Text style={styles.nameTxt}>{item.name}</Text>
          </View>
          <View style={styles.end}>
            <Image style={[styles.icon, { marginLeft: 15, marginRight: 5, width: 14, height: 14 }]} source={{ uri: "https://img.icons8.com/small/14/000000/double-tick.png" }} />
            <Text style={styles.time}>{item.date} {item.time}</Text>
          </View>
        </View>
        <TouchableOpacity  onPress={() => this.props.navigation.navigate('Call')}>
          <Image style={[styles.icon, { marginRight: 50 }]} source={{ uri: callIcon }} />
        </TouchableOpacity>
      </View>
    );
  }

  render() {
    return (
      <SafeAreaView style={{ flex: 1 }} >
        <FlatList
          extraData={this.state}
          data={this.state.calls}
          keyExtractor={(item) => {
            return item.id;
          }}
          renderItem={this.renderItem} />
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: '#dcdcdc',
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    padding: 10,
    justifyContent: 'space-between',

  },
  pic: {
    borderRadius: 25,
    width: 50,
    height: 50,
  },
  nameContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: 270,
  },
  nameTxt: {
    marginLeft: 15,
    fontWeight: '600',
    color: '#222',
    fontSize: 15,

  },
  mblTxt: {
    fontWeight: '200',
    color: '#777',
    fontSize: 13,
  },
  end: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  time: {
    fontWeight: '400',
    color: '#666',
    fontSize: 12,

  },
  icon: {
    height: 28,
    width: 28,
  }
});

const mapStateToProps = (state) => ({
  userReducer: state.userReducer
})

const Connected = connect(mapStateToProps)(
  _Connected
)

export { Connected };



// // const styles = StyleSheet.create({
// //     container: {
// //         flexGrow: 1,
// //         backgroundColor: '#fff',
// //         alignItems: 'center',
// //         justifyContent: 'space-around',
// //     },

// //     background: {
// //         position: 'absolute',
// //         left: 0,
// //         right: 0,
// //         top: 0,
// //         height: Dimensions.get('window').height
// //     },

// //     buttonSignin: {
// //         padding: 15,
// //         paddingHorizontal: 61,
// //         marginBottom: 25,
// //         alignItems: 'center',
// //         borderRadius: 25,
// //     },

// //     buttonSignup: {
// //         alignItems: 'center',
// //         borderRadius: 25,
// //         padding: 15,
// //     },

// //     text: {
// //         backgroundColor: 'transparent',
// //         fontSize: 22,
// //         color: '#fff',
// //     },
// // });
// // import React, {Component} from 'react'
// // import {Platform, ScrollView, Text, TouchableOpacity, View, PermissionsAndroid} from 'react-native'
// // // Import the RtcEngine class and view rendering components into your project.
// // import RtcEngine, {RtcLocalView, RtcRemoteView, VideoRenderMode} from 'react-native-agora'
// // // Import the UI styles.
// // import styles from './components/Style'
// //  import { FlatList, StyleSheet, Image, Text, SafeAreaView, TouchableOpacity, View, Dimensions } from 'react-native';
// //  import { LinearGradient } from 'expo-linear-gradient';
// //  import { connect } from 'react-redux'


// //  // Define a Props interface.
// // interface Props {
// // }

// // // Define a State interface.
// // interface State {
// //     appId: string,
// //     channelName: string,
// //     token: string,
// //     joinSucceed: boolean,
// //     peerIds: number[],
// // }

// // // Create an App component, which extends the properties of the Pros and State interfaces.
// // export default class App extends Component<Props, State> {
// //     _engine?: RtcEngine
// //     // Add a constructor，and initialize this.state. You need:
// //     // Replace yourAppId with the App ID of your Agora project.
// //     // Replace yourChannel with the channel name that you want to join.
// //     // Replace yourToken with the token that you generated using the App ID and channel name above.
// //     constructor(props) {
// //         super(props)
// //         this.state = {
// //             appId: 'yourAppId',
// //             channelName: 'yourChannel',
// //             token: 'yourToken',
// //             joinSucceed: false,
// //             peerIds: [],
// //         }
// //         if (Platform.OS === 'android') {
// //             requestCameraAndAudioPermission().then(() => {
// //                 console.log('requested!')
// //             })
// //         }
// //     }
// //     // Other code. See step 5 to step 10.

// // } 
