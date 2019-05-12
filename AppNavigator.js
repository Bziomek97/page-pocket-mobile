import React from 'react';
import Home from './src/Home';
import AccountScreen from './src/accountScreen'
import SignUp from './src/forms/SignUp';
import SignIn from './src/forms/SignIn';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { createStackNavigator, createAppContainer, createBottomTabNavigator } from 'react-navigation';
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
        AccountScreen: {screen: AccountScreen},
        SignIn: { screen: SignIn },
        SignUp: { screen: SignUp },
    },
    {
        //For React Navigation 2.+ change defaultNavigationOptions->navigationOptions
        defaultNavigationOptions: {
            initialRoute: 'AccountScreen',
            title: 'Profile',
            //Header title
        },
    }
);

ProfileStack.navigationOptions = ({ navigation }) => {
  let tabBarVisible = true;
  if (navigation.state.index > 0) {
    tabBarVisible = false;
  }

  return {
    tabBarVisible,
  };
};


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
        barStyle:{
         backgroundColor: 'rgba(154,154,154,0.5)',
        position:'absolute',
        tabBarVisible: false,
         },



          // style: {
          //     backgroundColor: 'transparent',
          //     borderTopWidth: 0,
          //     position: 'absolute',
          //     left: 40,
          //     right: 40,
          //     bottom: 10,
          // },


    }
);
//For React Navigation 2.+ need to export App only
//export default App;
//For React Navigation 3.+
export default createAppContainer(App);