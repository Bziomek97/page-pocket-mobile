import { createStackNavigator, createAppContainer } from 'react-navigation';
import Home from './src/Home';
import SecondScreen from './src/SecondPage';
import LoginScreen from './src/login'

const AppNavigator = createStackNavigator({
  Home: { screen: Home },
  SecondScreen: {screen: SecondScreen},
  LoginScreen: {screen: LoginScreen},
});

export default createAppContainer(AppNavigator);
