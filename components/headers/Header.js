import React from 'react'
import { StyleSheet, View, TouchableOpacity } from 'react-native'
import LottieView from 'lottie-react-native'

const Header = (props) => {
    return (
        <>
            <View style={styles.container}>
                {/* <TouchableOpacity onPress={() => alert('added!')}>
                    <LottieView
                        source={require('../../assets/lottie_animations/add.json')}
                        autoPlay
                        loop
                        style={styles.plusIcon}
                    />
                </TouchableOpacity>

                <TouchableOpacity onPress={() => alert('added!')}>
                    <LottieView
                        source={require('../../assets/lottie_animations/add.json')}
                        autoPlay
                        loop
                        style={styles.plusIcon}
                    />
                </TouchableOpacity> */}
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingBottom: 20
    },
    plusIcon: {
        width: 100,
        marginTop: 10,
    },

})

export default Header