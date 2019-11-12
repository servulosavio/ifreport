import React from "react";
import { createStackNavigator } from "react-navigation";

import HomeScreen from "./screens/HomeScreen";
import ReportDetailsScreen from "./screens/ReportDetailsScreen";
import NewReportScreen from "./screens/NewReportScreen";

export default class App extends React.Component {
  render() {
    return <StackNavigator />;
  }
}

const StackNavigator = createStackNavigator(
  {
    Home: HomeScreen,
    ReportDetails: ReportDetailsScreen,
    NewReport: NewReportScreen
  },
  {
    initialRouteName: "Home",
    navigationOptions: {
      headerTransparent: true
    }
  }
);
