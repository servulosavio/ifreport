import React from "react";

import CheckBox from "@react-native-community/checkbox";

import {
  StyleSheet,
  View,
  TextInput,
  Text,
  TouchableOpacity,
  Image,
  Alert
} from "react-native";

import { RNCamera } from "react-native-camera";

import Repository from "../components/Repository";
import { bold } from "colorette";
import AsyncStorage from "@react-native-community/async-storage";

export default class NewAvisoScreen extends React.Component {
  static navigationOptions = {
    drawerLabel: "Publicar Aviso",
    drawerIcon: ({ tintColor }) => (
      <Image
        source={require("../images/paper-plane.png")}
        style={styles.icon}
      ></Image>
    )
  };

  constructor() {
    super();
    this.state = {
      titulo: "",
      mensagem: "",
      usuario: ""
    };
  }

  updateValue(text, field) {
    if (field == "titulo") {
      this.setState({ titulo: text });
    } else if (field == "mensagem") {
      this.setState({ mensagem: text });
    }
  }

  addAviso = async () => {
    let collectionAviso = {};
    (collectionAviso.titulo = this.state.titulo),
      (collectionAviso.mensagem = this.state.mensagem),
      (collectionAviso.usuario = await AsyncStorage.getItem("@IfReport:usuario"));

    var url = "http://ifreport.hol.es/api/aviso/adiciona";
    // var data = {username: 'example'};

    fetch(url, {
      method: "POST", // or PUT
      body: JSON.stringify(collectionAviso),
      headers: new Headers({
        "Content-Type": "application/json"
      })
    })
      .then(res =>
        res.status == 200
          ? Alert.alert("Enviado!", "Aviso postado no mural!")
          : Alert.alert(res.statusText)
      )
      .catch(res => Alert.alert(res.statusText));
    // .then(response => alert(response));

    //ERA ASSIM
    // .then(res => res.json())
    // .catch(error => console.error("Error:", error))
    // .then(response => alert(response));

    // Alert.alert("Enviado!", "Aviso postado no mural!");
    // this.props.navigation.navigate('Home');

    this.props.navigation.navigate("Home");
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Image
            source={require("../images/logo.jpg")}
            style={styles.logoTop}
          />
          <Text style={styles.headerText}> IF Report</Text>
        </View>

        <View style={styles.body}>
          <Text style={{ fontWeight: "bold" }}> Novo Aviso</Text>

          <TextInput
            style={styles.boxInput}
            placeholder="Título..."
            value={this.state.titulo}
            onChangeText={text => this.updateValue(text, "titulo")}
            autoFocus
          />
          <TextInput
            style={styles.boxInputG}
            placeholder="Mensagem..."
            value={this.state.mensagem}
            onChangeText={text => this.updateValue(text, "mensagem")}
            multiline
          />

          <View style={styles.buttonContainer}>
            <TouchableOpacity
              style={styles.buttonCancel}
              onPress={() => this.props.navigation.navigate("Home")}
            >
              <Text style={styles.buttonText}>Cancelar</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.buttonAdd}
              onPress={() => this.addAviso()}
            >
              <Text style={styles.buttonText}>Enviar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  body: {
    marginTop: 50,
    margin: 20,
    alignContent: "center",
    justifyContent: "center"
  },

  container: {
    flex: 1,
    backgroundColor: "#fff"
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
    marginTop: 30,
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

  buttonText2: {
    color: "#000000"
  },

  icon: {
    height: 20,
    width: 20
  },

  header: {
    alignItems: "center",
    // justifyContent: "space-between",
    height: 60,
    backgroundColor: "green",
    flexDirection: "row",
    // paddingTop: 20,
    paddingHorizontal: 20
  },

  logoTop: {
    height: 50,
    width: 50
  },
  headerText: {
    fontWeight: "bold",
    fontSize: 22,
    color: "white"
  }
});
