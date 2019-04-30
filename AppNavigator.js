import { createStackNavigator, createAppContainer } from 'react-navigation';
import Home from './src/Home';
import SecondScreen from './src/SecondPage';
import SignUp from './src/forms/SignUp';

const AppNavigator = createStackNavigator({
  Home: { screen: Home },
  SecondScreen: {screen: SecondScreen},
  Register: {screen: SignUp},
});

export default createAppContainer(AppNavigator);
