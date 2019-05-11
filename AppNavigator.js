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
        Register: {screen: SignUp},
    },
    {
        //For React Navigation 2.+ change defaultNavigationOptions->navigationOptions
        defaultNavigationOptions: {
            //Header customization of the perticular Screen
            headerStyle: {
                backgroundColor: '#778899',
            },
            headerTintColor: '#FFFFFF',
            title: 'Profile',
            //Header title
        },
    }
);
const App = createBottomTabNavigator(
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
      tabBarOptions: {
        activeTintColor: '#008B8B',
        inactiveTintColor: 'gray',
          style: {
              backgroundColor: 'transparent',
              borderTopWidth: 0,
              position: 'absolute',
              left: 40,
              right: 40,
              bottom: 10,
          },

      },
    }
);
//For React Navigation 2.+ need to export App only
//export default App;
//For React Navigation 3.+
export default createAppContainer(App);