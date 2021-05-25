import messaging from '@react-native-firebase/messaging';
import {DeviceEventEmitter} from 'react-native';
import IncomingCall from 'react-native-incoming-call';
 
messaging().setBackgroundMessageHandler(async remoteMessage => {
  // Receive remote message
  if (remoteMessage?.notification?.title === 'Incoming Call') {
    // Display incoming call activity.
    IncomingCall.display(
      'callUUIDv4', // Call UUID v4
      'Quocs', // Username
      'https://avatars3.githubusercontent.com/u/16166195', // Avatar URL
      'Incomming Call', // Info text
      20000 // Timeout for end call after 20s
    );
  } else if (remoteMessage?.notification?.title === 'Missed Call') {
    // Terminate incoming activity. Should be called when call expired.
    IncomingCall.dismiss();
  }
 
  // Listen to headless action events
  DeviceEventEmitter.addListener("endCall", payload => {
    // End call action here
  });
  DeviceEventEmitter.addListener("answerCall", (payload) => {
    console.log('answerCall', payload);
    if (payload.isHeadless) {
      // Called from killed state
      IncomingCall.openAppFromHeadlessMode(payload.uuid);
    } else {
      // Called from background state
      IncomingCall.backToForeground();
    }
  });
});
const mapStateToProps = (state) => ({
    userReducer: state.userReducer
})



const Call = connect(mapStateToProps)(
    Keepcall
  )
  
  export { Call };
  

RNCallKeep.setup(options).then(accepted => {});