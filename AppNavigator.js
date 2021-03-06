import React from 'react';
import Home from './src/homeScreen';
import AccountScreen from './src/accountScreen'
import SignUp from './src/forms/SignUp';
import SignIn from './src/forms/SignIn';
import SearchScreen from './src/searchScreen';
import DetailView from './src/Component/DetailView';
import { createStackNavigator, createAppContainer, createBottomTabNavigator } from 'react-navigation';
import Ionicons from 'react-native-vector-icons/Ionicons';

//Background Color
const bgColor = '#1a1a1a';

const HomeStack = createStackNavigator(
    {
      Home: { 
        screen: Home,
        navigationOptions: {
          title: 'Home',
          //Header title
          headerStyle: {
            backgroundColor: bgColor,
          },
          headerTintColor: 'white',
        }, 
      },
      DetailView: { 
        screen: DetailView ,
        navigationOptions: {
          headerTransparent: true,
        }
      },
    },
);

const SearchStack = createStackNavigator(
    {
      Search: { 
        screen: SearchScreen,
      },
      DetailView: { 
        screen: DetailView ,
        navigationOptions: {
          headerTransparent: true,
        }
      },
    },
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
            title: 'Account Settings',
            //Header title
        headerStyle: {
          backgroundColor: bgColor,
        },
        headerTintColor: 'white',
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

SearchStack.navigationOptions = ({ navigation }) => {
  let tabBarVisible = true;
  if (navigation.state.index > 0) {
    tabBarVisible = false;
  }

  return {
    tabBarVisible,
  };
};

HomeStack.navigationOptions = ({ navigation }) => {
  let tabBarVisible = true;
  if (navigation.state.index > 0) {
    tabBarVisible = false;
  }

  return {
    tabBarVisible,
  };
};

/*const App = createMaterialBottomTabNavigator(
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
        tabBarVisible: false,
         },

    }
);*/

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
      initialRoute: 'Home',
      tabBarOptions:{
        activeTintColor: '#057302',
        inactiveTintColor: 'white',
      
        style: {
          backgroundColor: bgColor,
          borderColor: "transparent",
        },
    },


  }
);

export default createAppContainer(App);