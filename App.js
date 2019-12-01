import React from "react";
import { createStackNavigator, createDrawerNavigator, createSwitchNavigator } from "react-navigation";

import HomeScreen from "./screens/HomeScreen";
import ReportDetailsScreen from "./screens/ReportDetailsScreen";
import NewReportScreen from "./screens/NewReportScreen";
import LoginScreen from "./screens/LoginScreen";
import LoadingLoginScreen from "./screens/LoadingLoginScreen";
import CamScreen from "./screens/CamScreen";

export default class App extends React.Component {
  render() {
    return <SwitchNavigator />;
  }
}

takePicture = async () => {
  if (this.camera) {
    const options = { quality: 0.5, base64: true };
    const data = await this.camera.takePictureAsync(options)
    alert(data.uri);
  }
}


const DrawerNavigatorAdmin = createDrawerNavigator(
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


const DrawerNavigatorUsuario = createDrawerNavigator(
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


const StackNavigatorAdmin = createStackNavigator(
  {
    DrawerNavigator: DrawerNavigatorAdmin,
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



const StackNavigatorUsuario = createStackNavigator(
  {
    DrawerNavigator: DrawerNavigatorUsuario,
    Home: HomeScreen,
    ReportDetails: ReportDetailsScreen,
    Cam: CamScreen
    // NewReport: NewReportScreen
  },
  {
    initialRouteName: "DrawerNavigator",
    navigationOptions: {
      headerTransparent: true
    }
  }
);

const SwitchNavigator = createSwitchNavigator(
  {
    StackAdmin: StackNavigatorAdmin,
    StackUsuario: StackNavigatorUsuario,
    LoadingLogin: LoadingLoginScreen,
    Login: LoginScreen,
  },{
    initialRouteName: 'LoadingLogin',
    navigationOptions: {
      headerTransparent: true,
    },
  }

);