import React from "react";
import { createStackNavigator, createDrawerNavigator } from "react-navigation";

import HomeScreen from "./screens/HomeScreen";
import ReportDetailsScreen from "./screens/ReportDetailsScreen";
import NewReportScreen from "./screens/NewReportScreen";

export default class App extends React.Component {
  render() {
    return <StackNavigator />;
  }
}


const DrawerNavigator = createDrawerNavigator(
  {
    Home: HomeScreen,
    NewReport: NewReportScreen
  },
  {
    initialRouteName: "Home",
    navigationOptions: {
    headerTransparent: true
    }
  }
);


const StackNavigator = createStackNavigator(
  {
    DrawerNavigator: DrawerNavigator,
    Home: HomeScreen,
    ReportDetails: ReportDetailsScreen,
    // NewReport: NewReportScreen
  },
  {
    initialRouteName: "DrawerNavigator",
    navigationOptions: {
      headerTransparent: true
    }
  }
);
