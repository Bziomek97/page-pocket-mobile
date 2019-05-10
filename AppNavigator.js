import React from 'react';
import Home from './src/Home';
import SecondScreen from './src/SecondPage'
import SignUp from './src/forms/SignUp';
import SignIn from './src/forms/SignIn';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { createStackNavigator, createBottomTabNavigator, createAppContainer } from 'react-navigation';

const HomeStack = createStackNavigator(
    {
      Home: { screen: Home },
      SecondScreen: {screen: SecondScreen},
      Register: {screen: SignUp},
      Login: { screen: SignIn },
    },
    {
      //For React Navigation 2.+ change defaultNavigationOptions->navigationOptions
      defaultNavigationOptions: {
        //Header customization of the perticular Screen
        headerStyle: {
          backgroundColor: '#42f44b',
        },
        headerTintColor: '#FFFFFF',
        title: 'Home',
        //Header title
      },
    }
);

const SettingsStack = createStackNavigator(
    {
      Register: {screen: SignUp},
      Login: { screen: SignIn },
    },
    {
      //For React Navigation 2.+ change defaultNavigationOptions->navigationOptions
      defaultNavigationOptions: {
        //Header customization of the perticular Screen
        headerStyle: {
          backgroundColor: '#42f44b',
        },
        headerTintColor: '#FFFFFF',
        title: 'Settings',
        //Header title
      },
    }
);

const App = createBottomTabNavigator(
    {
      Home: { screen: HomeStack },
      Settings: { screen: SettingsStack },
    },
    {
      defaultNavigationOptions: ({ navigation }) => ({
        tabBarIcon: ({ focused, horizontal, tintColor }) => {
          const { routeName } = navigation.state;
          let IconComponent = Ionicons;
          let iconName;
          if (routeName === 'Home') {
            iconName = `ios-information-circle${focused ? '' : '-outline'}`;
          } else if (routeName === 'Settings') {
            iconName = `ios-checkmark-circle${focused ? '' : '-outline'}`;
          }
          return <IconComponent name={iconName} size={25} color={tintColor} />;
        },
      }),
      tabBarOptions: {
        activeTintColor: '#42f44b',
        inactiveTintColor: 'gray',
      },
    }
);
//For React Navigation 2.+ need to export App only
//export default App;
//For React Navigation 3.+
export default createAppContainer(App);