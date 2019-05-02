import { createStackNavigator, createAppContainer } from 'react-navigation';
import Home from './src/Home';
import SecondScreen from './src/SecondPage'
import SignUp from './src/forms/SignUp';
import SignIn from './src/forms/SignIn';

const AppNavigator = createStackNavigator({
  Home: { screen: Home },
  SecondScreen: {screen: SecondScreen},
  Register: {screen: SignUp},
  Login: { screen: SignIn },
});

export default createAppContainer(AppNavigator);
