import React from 'react';
import AppNavigator from './AppNavigator';
import { clearSession } from './src/scripts/session';
import { logout } from './src/API/Users';

export default class App extends React.Component {

  componentDidMount(){
    //clearSession();
    //logout();
  }

  render() {
    return (
      <AppNavigator/>
    );
  }
}
