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
          backgroundColor: '#778899',
        },
        headerTintColor: '#FFFFFF',
        title: 'Home',
        //Header title
      },
    }
);

const SearchStack = createStackNavigator(
    {
      Register: {screen: SignUp},
      Login: { screen: SignIn },
    },
    {
      //For React Navigation 2.+ change defaultNavigationOptions->navigationOptions
      defaultNavigationOptions: {
        //Header customization of the perticular Screen
        headerStyle: {
          backgroundColor: '#778899',
        },
        headerTintColor: '#FFFFFF',
        title: 'Favorite',
        //Header title
      },
    }
);

const ProfileStack = createStackNavigator(
    {
        Home: { screen: Profile },
        SecondScreen: {screen: SecondScreen},
        Register: {screen: SignUp},
        Login: { screen: SignIn },
    },
    {
        //For React Navigation 2.+ change defaultNavigationOptions->navigationOptions
        defaultNavigationOptions: {
            //Header customization of the perticular Screen
            headerStyle: {
                backgroundColor: '#778899',
            },
            headerTintColor: '#FFFFFF',
            title: 'Home',
            //Header title
        },
    }
);
const App = createBottomTabNavigator(
    {
      Home: { screen: HomeStack },
      Search: { screen: SearchStack },
    },
    {
      defaultNavigationOptions: ({ navigation }) => ({
        tabBarIcon: ({ focused, horizontal, tintColor }) => {
          const { routeName } = navigation.state;
          let IconComponent = Ionicons;
          let iconName;
          if (routeName === 'Home') {
            iconName = `ios-home`;
          } else if (routeName === 'Search') {
            iconName = `ios-search`;
          }
          return <IconComponent name={iconName} size={25} color={tintColor} />;
        },
      }),
      tabBarOptions: {
        activeTintColor: '#008B8B',
        inactiveTintColor: 'gray',
      },
    }
);
//For React Navigation 2.+ need to export App only
//export default App;
//For React Navigation 3.+
export default createAppContainer(App);