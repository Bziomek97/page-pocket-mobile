import { createStackNavigator, createAppContainer } from 'react-navigation';
import Home from './src/Home';
import SecondScreen from './src/SecondPage';

const AppNavigator = createStackNavigator({
  Home: { screen: Home },
  SecondScreen: {screen: SecondScreen},
});

export default createAppContainer(AppNavigator);
