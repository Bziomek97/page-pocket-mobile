import { createStackNavigator, createAppContainer } from 'react-navigation';
import Home from './src/Home';
import SecondScreen from './src/SecondPage';
import SignIn from './src/forms/SignIn';

const AppNavigator = createStackNavigator({
  Home: { screen: Home },
  SecondScreen: {screen: SecondScreen},
  Login: { screen: SignIn },
});

export default createAppContainer(AppNavigator);
