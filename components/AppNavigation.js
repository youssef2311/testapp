import 'react-native-gesture-handler';
import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import AuthStack from './AuthStack'
import AppStack from './AppStack'
import { signIn } from '../redux/index';
import { connect } from 'react-redux'
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function _AppNavigation(props) {

    const { userReducer, DO_LOGIN } = props

    const { loggedIn } = userReducer

    useEffect(() => {
        getToken()
    }, []);

    const getToken = async () => {
        try {
            const token = await AsyncStorage.getItem('token')
            if (token !== null) {
                DO_LOGIN(token)
            }
        } catch (e) {
            console.log(e)
        }
    }

    const Drawer = createDrawerNavigator();

    return (
        <NavigationContainer>
            {
                !loggedIn ? (
                    <Drawer.Navigator initialRouteName="App">
                        <Drawer.Screen name="App" component={AppStack} />
                    </Drawer.Navigator>
                ) : (
                    <AuthStack />
                )
            }
        </NavigationContainer>
    );
}

const mapStateToProps = (state) => ({
    userReducer: state.userReducer
})

const mapDispatchToProps = (dispatch) => ({
    DO_LOGIN: (token) => {
        dispatch({ type: 'DO_LOGIN', token: token, loading: false, loggedIn: true })
    },
    signIn
})

const AppNavigation = connect(mapStateToProps, mapDispatchToProps)(_AppNavigation)

export { AppNavigation };