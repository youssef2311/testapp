import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View, Dimensions, TextInput, KeyboardAvoidingView, ActivityIndicator } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import LottieView from 'lottie-react-native';
import { connect } from 'react-redux'
import { signIn } from '../../redux/index';

class _SignIn extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        };
    }

    componentDidMount() {
        this.animation.play();
        // Or set a specific startFrame and endFrame with:
        // this.animation.play(30, 120);
    }

    render() {

        const { userReducer, signIn } = this.props

        const { loading } = userReducer

        return (
            <View style={styles.container}>
                <LinearGradient
                    // Background Linear Gradient
                    colors={['rgba(46, 204, 113,1.0)', 'rgba(52, 152, 219,1.0)']}
                    style={styles.background}
                />

                <View style={styles.animationView}>
                    <LottieView
                        ref={animation => {
                            this.animation = animation;
                        }}
                        style={{
                            width: 250,
                            height: 250
                        }}
                        source={require('../../assets/lottie_animations/login-animation.json')}
                    />
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
                        onChangeText={email => this.setState({ email: email })}
                        placeholder='Email'
                        placeholderTextColor='rgba(236, 240, 241,0.5)'
                        keyboardType='email-address'
                    />

                    <TextInput
                        style={styles.inputText}
                        onChangeText={password => this.setState({ password: password })}
                        placeholder='Password'
                        placeholderTextColor='rgba(236, 240, 241,0.5)'
                        secureTextEntry
                    />

                    <TouchableOpacity
                        style={{
                            height: 40,
                            width: Dimensions.get('window').width - 200,
                            alignItems: 'center',
                            justifyContent: 'center',
                            backgroundColor: 'white',
                            borderRadius: 25,
                        }}
                        onPress={() => signIn({ email: this.state.email, password: this.state.password })}
                    >

                        {
                            loading
                                ?
                                <ActivityIndicator size="small" color="#0000ff" />
                                :
                                <Text>Sign In</Text>
                        }

                    </TouchableOpacity>

                </KeyboardAvoidingView>

                <StatusBar style="auto" />
            </View>
        );
    }
}

const mapStateToProps = (state) => ({
    userReducer: state.userReducer
})

const SignIn = connect(mapStateToProps, { signIn })(
    _SignIn
)

export { SignIn };

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },

    background: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        height: Dimensions.get('window').height
    },

    buttonSignin: {
        padding: 15,
        paddingHorizontal: 61,
        marginBottom: 25,
        alignItems: 'center',
        borderRadius: 25,
    },

    buttonSignup: {
        alignItems: 'center',
        borderRadius: 25,
        padding: 15,
    },

    text: {
        backgroundColor: 'transparent',
        fontSize: 22,
        color: '#fff',
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

    animationView: {
        flexGrow: 1,
        alignItems: 'center',
        marginTop: StatusBar.currentHeight,
        justifyContent: 'center',
        backgroundColor: 'white',
        width: '100%',
        height: '10%',
        borderBottomRightRadius: 50,
        borderBottomLeftRadius: 50,
        shadowColor: 'black',
        shadowOffset: {
            width: 0,
            height: 3
        },
        shadowOpacity: 0.2,
        shadowRadius: 10
    }
});
