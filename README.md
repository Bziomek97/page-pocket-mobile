PagePocket (Mobile) 
=
PagePocket is application to store bookmarks and pages in more organised way. It used React-Native technology with expo. Application use ports for: Application - `8044`, Debugging - `19002`. 

### Requirements
 - Node.js version 10.14.1
 - npm version 6.9.0

### Instalation
1st Step: Open terminal/command line. </br>
2nd Step: Clone repository: `git clone https://github.com/Bziomek97/page-pocket-mobile.git` </br>
3rd Step: Go to directory:
 - Linux/macOS: `cd page-pocket-mobile`
 - Windows: `cd \? ?:\page-pocket-mobile`

4th Step: Install missing dependeries: `npm install` </br>
5th Step: Run application: `npm start`

### Run on Android
Download application from Google Store: `Expo`. Past installation you must open this app and select option to scan QR code or type address manually.

### Run on iOS
This is more simpler than Android. You must only to do, it`s scan QR code to run.

### Routing
1. Create new js file in src file
2. Add to AppNavigator.js:
  # `import <screenName> from ".\<file>"`
  # in createStackNavigator: nameOfScreen: {screen: <screenName>, ... } which ... means more settings.
3. Add button (or something interact with `onClick`) with method : `this.props.navigation.navigate('<nameOfScreen>')` and add to `React.Component` this -> <Props>

Useful Links'n'Tips for Developers
======
This is some useful Links and tips to make this project great again:
 # Information (How to write in Front-End or Branches?) u can find on our **Trello group**.
 # React-Native docs: https://facebook.github.io/react-native/docs/getting-started
 # Expo: https://expo.io/learn
 # Our code-editor: Jetbrains Webstorm or Visual Code Studio or Atom with Nuclide plugin
