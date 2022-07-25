import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import StackNavigator from './src/navigators/StackNavigator'
import store from './src/redux/store'
import { Provider } from 'react-redux'

export default function App() {
  return (
    <SafeAreaProvider>
      <StatusBar
        visibility={false}
      // hidden={true}
      />
      <NavigationContainer>
        <Provider store={store}>
          <StackNavigator />
        </Provider>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

