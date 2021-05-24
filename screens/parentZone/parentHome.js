import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, Image, TouchableOpacity, View, Dimensions, SafeAreaView, FlatList } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import LottieView from 'lottie-react-native'
import { connect } from 'react-redux'
import axios from 'axios'

const Item = ({ title }) => (
    <TouchableOpacity
        style={styles.item}
        onPress={() => { alert(title) }}
    >
        <View
            style={{
                width: 120,
                height: 120,
                borderRadius: 100,
                backgroundColor: '#fff'
            }}
        >
            <Image source={require('../../assets/images/father_avatar.png')} style={{ width: 120, height: 120, borderRadius: 100 }} />
        </View>

        <View style={styles.item}>
            <Text style={styles.title}>Firass</Text>
        </View>

    </TouchableOpacity>
);

export default class _ParentHome extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            data: []
        }
    }

    componentDidMount() {

        this.githubGetUrl()
        // Or set a specific startFrame and endFrame with:
        // this.animation.play(30, 120);
    }

    githubGetUrl = () => {
        axios.get('https://jsonplaceholder.typicode.com/todos')
            .then((response) => {
                this.setState({ data: response.data })
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
    }

    render() {

        const renderItem = ({ item }) => item.userId == 1 ? <Item title={item.title} /> : null;

        return (
            <View style={styles.container}>
                <LinearGradient
                    // Background Linear Gradient
                    colors={['rgba(46, 204, 113,1.0)', 'rgba(52, 152, 219,1.0)']}
                    style={styles.background}
                />

                <SafeAreaView style={{
                    alignItems: 'center',
                    justifyContent: 'center'
                }}>
                    <FlatList
                        data={this.state.data}
                        renderItem={renderItem}
                        keyExtractor={item => item.id}
                        numColumns={2}
                        showsHorizontalScrollIndicator={false}
                        showsVerticalScrollIndicator={false}
                    />
                    <TouchableOpacity style={{
                        width: 100,
                        height: 100,
                        alignItems:'center',
                        justifyContent:'center'
                    }} onPress={() => alert('added!')}>
                        <LottieView
                            source={require('../../assets/lottie_animations/add.json')}
                            autoPlay
                            loop
                        />
                    </TouchableOpacity>
                </SafeAreaView>

                <StatusBar style="auto" />
            </View>
        );
    }
}

const mapStateToProps = (state) => ({
    userReducer: state.userReducer
})

const ParentHome = connect(mapStateToProps)(
    _ParentHome
)

export { ParentHome };

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center'
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

    item: {

        alignItems: 'center',
        justifyContent: 'center',
        padding: 25,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.29,
        shadowRadius: 4.65,

        elevation: 7,
    },

    title: {
        fontSize: 20,
        color: 'white'
    },
});
