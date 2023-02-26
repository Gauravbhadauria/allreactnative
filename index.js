/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import CustomBottom from './CustomBottom';
import CustomTable from './CustomTable';
import AllFlatlist from './src/screens/AllFlatlist';
import AllModals from './src/screens/AllModals';
import BlurEffect from './src/screens/BlurEffect';
import ChipsDemo from './src/screens/ChipsDemo';
import CustomBottomSheet from './src/screens/CustomBottomSheet';
import LoginScreenWithNeomorph from './src/screens/LoginScreenWithNeomorph';
import MyFlatlist from './src/screens/MyFlatlist';
import NeomorphismDemo from './src/screens/NeomorphismDemo';
import Otp from './src/screens/Otp';
import TinderSwipe from './src/screens/TinderSwipe';
import TinderSwipeDemo from './src/screens/TinderSwipeDemo';
import Todo from './src/screens/Todo';
import SwitchButton from './SwitchButton';

AppRegistry.registerComponent(appName, () => SwitchButton);
