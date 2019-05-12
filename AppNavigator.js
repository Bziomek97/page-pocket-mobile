import React from 'react';
import Home from './src/Home';
import SecondScreen from './src/SecondPage'
import SignUp from './src/forms/SignUp';
import SignIn from './src/forms/SignIn';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import {createMaterialBottomTabNavigator} from "react-navigation-material-bottom-tabs";



const HomeStack = createStackNavigator(
    {
      Home: { screen: Home },
    },
    {
      //For React Navigation 2.+ change defaultNavigationOptions->navigationOptions
      defaultNavigationOptions: {
        
        title: 'Home',
        //Header title
      },
    }
);

const SearchStack = createStackNavigator(
    {
      Login: { screen: SignIn },
    },
    {
      //For React Navigation 2.+ change defaultNavigationOptions->navigationOptions
      defaultNavigationOptions: {
        title: 'Favorite',
        //Header title
      },
    }
);

const ProfileStack = createStackNavigator(
    {
        Register: {screen: SignUp},
    },
    {
        //For React Navigation 2.+ change defaultNavigationOptions->navigationOptions
        defaultNavigationOptions: {

            title: 'Profile',
            //Header title
        },
    }
);
const App = createMaterialBottomTabNavigator(
    {
      Home: { screen: HomeStack },
      Search: { screen: SearchStack },
      Profile: {screen: ProfileStack},
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
          else if (routeName === 'Profile') {
              iconName = `ios-person`;
          }

          return <IconComponent name={iconName} size={25} color={tintColor} />;
        },
      }),
        initialRoute: 'Home',
        activeColor: '#003300',
        inactiveColor: 'white',
        barStyle:{backgroundColor: 'rgba(154,154,154,0.5)',
        position:'absolute',
         },

    }
);

export default createAppContainer(App);