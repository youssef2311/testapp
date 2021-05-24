import 'react-native-gesture-handler';
import React from 'react';
import { useFonts } from 'expo-font';
import { Provider } from 'react-redux'
import { store } from './redux/index';
import AppLoading from 'expo-app-loading';
import { AppNavigation } from './components/AppNavigation';

export default function App() {

  let [fontsLoaded] = useFonts({
    'WTR': require("./assets/fonts/WhaleTriedRegular.ttf"),
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <Provider store={store}>
        <AppNavigation />
      </Provider>
    );
  }
}
