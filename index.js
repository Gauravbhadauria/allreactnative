/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import BlurEffect from './src/screens/BlurEffect';
import ChipsDemo from './src/screens/ChipsDemo';
import LoginScreenWithNeomorph from './src/screens/LoginScreenWithNeomorph';
import MyFlatlist from './src/screens/MyFlatlist';
import NeomorphismDemo from './src/screens/NeomorphismDemo';
import TinderSwipe from './src/screens/TinderSwipe';
import TinderSwipeDemo from './src/screens/TinderSwipeDemo';

AppRegistry.registerComponent(appName, () => TinderSwipeDemo);
