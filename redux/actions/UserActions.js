import api from '../../APIs/baseAPI'
import AsyncStorage from '@react-native-async-storage/async-storage';

export const signIn = ({ email, password }) => {

    return async (dispatch) => {
        dispatch({ type: 'DO_LOGIN', loading: true })
        await api.post('/login_check', {
            username: email,
            password: password
        })
            .then(async (res) => {
                if (res.status == 200) {
                    try {
                        await AsyncStorage.setItem('token', res.data.token)
                        dispatch({ type: 'DO_LOGIN', token: res.data.token, loading: false, loggedIn: true })
                    } catch (e) {
                        console.log(e)
                    }
                }
            })
            .catch((e) => {
                dispatch({ type: 'ON_ERROR', token: null, loading: false })
                alert('Wrong email or password')
                console.log('error')
            })
    }
}

export const signUp = ({ firstName, lastName, email, password, gender, birthday, nationality, phoneNumber, familySelfie, parentSelfie }) => {

    return async (dispatch) => {
        dispatch({ type: 'DO_LOGIN', loading: true })
        await api.post('/users', {
            fullName: firstName + ' ' + lastName,
            username: email,
            email: email,
            password: password,
            roles: [
                "Parent"
            ],
            Genre: gender,
            date_naissance: birthday,
            Nationalite: nationality,
            phone: phoneNumber,
            photo: familySelfie,
            selfie: parentSelfie,
            BleuCarte: "",
            status: "Inactive",
            genre: gender,
            dateNaissance: birthday,
            nationalite: nationality,
            bleuCarte: ""
        })
            .then(async (res) => {
                console.log(res.status)
            })
            .catch((e) => {
                alert('Few Informations are missing')
                dispatch({ type: 'ON_ERROR', token: null, loading: false })
                console.log('error' + e)
            })
    }
}

export const signOut = () => {
    return async (dispatch) => {
        try {
            await AsyncStorage.removeItem('token')
            dispatch({ type: 'DO_LOGOUT', token: null, loggedIn: false })
        } catch (e) {
            console.log(e)
        }
    }
}