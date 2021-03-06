/**
 * @format
 */

import { AppRegistry, YellowBox } from "react-native";
import App from "./App";
import { name as appName } from "./app.json";

AppRegistry.registerComponent(appName, () => App);

YellowBox.ignoreWarnings([
  "DrawerLayoutAndroid drawerPosition",
  "componentWillReceiveProps"
]);
