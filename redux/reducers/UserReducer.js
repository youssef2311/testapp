export const userReducer = (state = {}, action) => {
    switch (action.type) {
        case 'DO_LOGIN':
            return {
                ...state,
                token: action.token,
                loading: action.loading,
                loggedIn: action.loggedIn
            }

        case 'PERSONAL_INFOS':
            return {
                ...state,
                firstName: action.firstName,
                lastName: action.lastName,
                email: action.email,
                password: action.password,
                nationality: action.nationality,
                phoneNumber: action.phoneNumber,
            }

        case 'GENDER':
            return {
                ...state,
                gender: action.gender,
            }

        case 'PARENT_IMAGE':
            return {
                ...state,
                parentSelfie: action.parentSelfie,
            }

        case 'FAMILY_IMAGE':
            return {
                ...state,
                familySelfie: action.familySelfie,
            }

        case 'BIRTHDAY':
            return {
                ...state,
                birthday: action.birthday,
            }
            
        case 'DO_LOGOUT':
            return {
                ...state,
                token: action.token,
                loggedIn: action.loggedIn
            }

        case 'ON_ERROR':
            return {
                ...state,
                appError: action.payload,
                loading: action.loading
            }
        default:
            return state
    }
}