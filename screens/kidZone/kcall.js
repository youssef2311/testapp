import {useEffect} from 'react';
import {DeviceEventEmitter, Platform} from 'react-native';
import IncomingCall from 'react-native-incoming-call';
 
// Listen to cancel and answer call events
useEffect(() => {
  if (Platform.OS === "android") {
    /**
     * App open from killed state (headless mode)
    */
    const payload = await IncomingCall.getExtrasFromHeadlessMode();
    console.log('launchParameters', payload);
    if (payload) {
      // Start call action here. You probably want to navigate to some CallRoom screen with the payload.uuid.
    }
 
    /**
     * App in foreground / background: listen to call events and determine what to do next
    */
    DeviceEventEmitter.addListener("endCall", payload => {
      // End call action here
    });
    DeviceEventEmitter.addListener("answerCall", payload => {
      // Start call action here. You probably want to navigate to some CallRoom screen with the payload.uuid.
    });
  }
}, []);