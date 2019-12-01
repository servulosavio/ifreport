import React from "react";
import {
  StyleSheet,
  View,
  TextInput,
  Text,
  TouchableOpacity,
  Alert,
  CheckBox,
  Image,
  ActivityIndicator,
  StatusBar
} from "react-native";

import Repository from "../components/Repository";
import LoadingModal from "../components/LoadingModal";
import AsyncStorage from "@react-native-community/async-storage";

export default class LogoutScreen extends React.Component {

  static navigationOptions = {
    drawerLabel: "Sair",
    drawerIcon: ({ tintColor }) => (
      <Image
        source={require("../images/logout.png")}
        style={styles.icon}
      ></Image>
    )
  };

  constructor(props) {
      super(props);
      this.init();
  }

  init = async () => {
      await AsyncStorage.removeItem("@IfReport:usuario");
      this.props.navigation.navigate('Login');
  }

  render() {
    return (
      <View style={styles.container}>
        <ActivityIndicator/>
        <StatusBar barStyle="default" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
    margin: 20,
    alignContent: "center",
    justifyContent: "center"
  },

  boxInput: {
    alignSelf: "stretch",
    height: 40,
    borderRadius: 5,
    backgroundColor: "#DDD",
    margin: 5
  },

  boxInputG: {
    alignSelf: "stretch",
    height: 200,
    borderRadius: 5,
    backgroundColor: "#DDD",
    margin: 5
  },

  buttonContainer: {
    alignContent: "center",
    justifyContent: "center",
    flexDirection: "row",
    justifyContent: "center"
  },

  buttonAdd: {
    justifyContent: "center",
    alignItems: "center",
    height: 40,
    width: 80,
    borderRadius: 5,
    backgroundColor: "green",
    margin: 5
  },

  buttonCancel: {
    justifyContent: "center",
    alignItems: "center",
    height: 40,
    width: 80,
    borderRadius: 5,
    backgroundColor: "#a9a9a9",
    margin: 5
  },

  buttonText: {
    color: "#ffffff"
  },

  logo: {
    height: 200,
    width: 200
  },

  logoContainer: {
    alignItems: "center",
    justifyContent: "center"
  },

  icon: {
    height: 20,
    width: 20
  },
});
