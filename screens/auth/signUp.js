import React, { useRef } from 'react'
import { ActivityIndicator, View, useWindowDimensions } from 'react-native'
import ViewPager from '@react-native-community/viewpager'
import { FirstPage } from '../../components/signup/firstPage'
import { SecondPage } from '../../components/signup/secondPage'
import { ThirdPage } from '../../components/signup/thirdPage'
import { FourthPage } from '../../components/signup/fourthPage'
import { FifthPage } from '../../components/signup/fifthPage'
import Footer from '../../components/signup/Footer'
import { connect } from 'react-redux'
import { signUp } from '../../redux/index'

const _SignUp = (props) => {

    const pagerRef = useRef(null);

    const handlePageChange = pageNumber => {
        pagerRef.current.setPage(pageNumber);
    };

    const { userReducer, signUp } = props

    const windowWidth = useWindowDimensions().width;
    const HEIGHT = windowWidth * 0.21;
    const FOOTER_PADDING = windowWidth * 0.1;

    const {
        email,
        firstName,
        lastName,
        password,
        nationality,
        phoneNumber,
        gender,
        birthday,
        familySelfie,
        parentSelfie,
        loading
    } = userReducer

    return (
        <View style={{ flex: 1 }}>
            <ViewPager style={{ flex: 1 }} initialPage={0} ref={pagerRef}>
                <View key="1">
                    <FirstPage />
                    <Footer
                        backgroundColor="#2980b9"
                        rightButtonLabel="Next"
                        rightButtonPress={() => {
                            ( email == '' || firstName == '' || lastName == '' || password == '' || 
                            nationality == '' || phoneNumber == '' )
                            ?
                            alert('Please, fill all the form !')
                            :
                            handlePageChange(1)
                        }}
                    />
                </View>
                <View key="2">
                    <SecondPage />
                    <Footer
                        backgroundColor="#2980b9"
                        rightButtonLabel="Next"
                        rightButtonPress={() => {
                            handlePageChange(2)
                        }}
                        leftButtonLabel="Back"
                        leftButtonPress={() => {
                            handlePageChange(0)
                        }}
                    />
                </View>
                <View key="3">
                    <ThirdPage />
                    <Footer
                        backgroundColor="#2980b9"
                        rightButtonLabel="Next"
                        rightButtonPress={() => {
                            handlePageChange(3)
                        }}
                        leftButtonLabel="Back"
                        leftButtonPress={() => {
                            handlePageChange(1)
                        }}
                    />

                </View>

                <View key="5">
                    <FifthPage />
                    <Footer
                        backgroundColor="#2980b9"
                        rightButtonLabel="Next"
                        rightButtonPress={() => {
                            handlePageChange(4)
                        }}
                        leftButtonLabel="Back"
                        leftButtonPress={() => {
                            handlePageChange(2)
                        }}
                    />

                </View>

                <View key="6">
                    <FourthPage />
                    {loading
                        ?
                        <View style={{
                            backgroundColor: "#2980b9",
                            flexDirection: 'row',
                            justifyContent: 'center',
                            height: HEIGHT,
                            opacity: 0.6,
                            alignItems: 'center',
                            paddingHorizontal: FOOTER_PADDING
                        }}>
                            <ActivityIndicator size="small" color="#fff" />
                        </View>
                        :
                        <Footer
                            backgroundColor="#2980b9"
                            rightButtonLabel="Register"
                            rightButtonPress={() => {
                                signUp({
                                    email: email,
                                    firstName: firstName,
                                    lastName: lastName,
                                    password: password,
                                    nationality: nationality,
                                    phoneNumber: phoneNumber,
                                    gender: gender,
                                    birthday: birthday,
                                    familySelfie: familySelfie,
                                    parentSelfie: parentSelfie,
                                })
                            }}
                            leftButtonLabel="Back"
                            leftButtonPress={() => {
                                handlePageChange(3)
                            }}
                        />
                    }

                </View>
            </ViewPager>
        </View>
    );
};

const mapStateToProps = (state) => ({
    userReducer: state.userReducer
})

const SignUp = connect(mapStateToProps, { signUp })(_SignUp)

export { SignUp };
