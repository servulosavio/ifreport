import React from "react";
import { createStackNavigator, createDrawerNavigator, createSwitchNavigator } from "react-navigation";

import HomeScreenAdmin from "./screens/HomeScreenAdmin";
import HomeScreenUser from "./screens/HomeScreenUser"
import ReportDetailsScreen from "./screens/ReportDetailsScreen";
import NewReportScreen from "./screens/NewReportScreen";
import NewAvisoScreen from "./screens/NewAvisoScreen";
import LoginScreen from "./screens/LoginScreen";
import LoadingLoginScreen from "./screens/LoadingLoginScreen";
import CamScreen from "./screens/CamScreen";
import LogoutScreen from "./screens/LogoutScreen";
import NewUserScreen from "./screens/NewUserScreen"

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
    Home: HomeScreenAdmin,
    NewAviso: NewAvisoScreen,
  
    // Mural: HomeScreenUser, // TEMPORÁRIO PARA TESTE
    Sair: LogoutScreen,
    // NewReport: NewReportScreen
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
    Home: HomeScreenUser,
    NewReport: NewReportScreen,
    Sair: LogoutScreen,
    // Temp: HomeScreenAdmin,// TEMPORÁRIO PARA TESTE
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
    Home: HomeScreenAdmin,
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
    Home: HomeScreenUser,
    ReportDetails: ReportDetailsScreen,
    Cam: CamScreen,
    
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
    NewUser: NewUserScreen,
  },{
    initialRouteName: 'LoadingLogin',
    navigationOptions: {
      headerTransparent: true,
    },
  }

);