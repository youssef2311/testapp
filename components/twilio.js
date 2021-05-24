import TwilioVoice from 'react-native-twilio-voice-sdk'

// Get the library version
TwilioVoice.version

// Get the underlying native TwilioVoice library version
TwilioVoice.nativeVersion

// Subscribe to call events
let call
const removeSubscription = TwilioVoice.on("connect", connectedCall => call = connectedCall)
// call removeSubscription() to stop listening

// start a call
TwilioVoice.connect(accessToken, {to: '+61234567890'})

// hangup
call.disconnect()

// mute or un-mute the call
// mutedValue must be a boolean
call.muted(mutedValue)

// Send the call audio to the speaker phone
// speakerPhoneEnabled must be a boolean
call.setSpeakerPhone(speakerPhoneEnabled)

call.sendDigits(digits)

// Call properties
call.from
call.to
call.sid
call.state // "RINGING" | "CONNECTING" | "CONNECTED" | "RECONNECTING" | "DISCONNECTED"

// TwilioVoice.on('ringing', function(call: Call): void);
// TwilioVoice.on('connect', function(call: Call): void);
// TwilioVoice.on('connectFailure', function(call: Call, err?: Error): void);
// TwilioVoice.on('reconnecting', function(call: Call, err?: Error): void);
// TwilioVoice.on('reconnect', function(call: Call): void);
// TwilioVoice.on('disconnect', function(call: Call, err?: Error): void);
