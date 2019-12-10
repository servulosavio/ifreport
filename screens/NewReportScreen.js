import React from "react";

import CheckBox from "@react-native-community/checkbox";

import {
  StyleSheet,
  View,
  TextInput,
  Text,
  TouchableOpacity,
  Image,
  Picker,
  Alert
} from "react-native";

import { RNCamera } from "react-native-camera";

import Repository from "../components/Repository";
import { bold } from "colorette";
import AsyncStorage from "@react-native-community/async-storage";

export default class NewReportScreen extends React.Component {
  static navigationOptions = {
    drawerLabel: "Reportar",
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
      descricao: "",
      classificacao: "Crítica",
      usuario: ""
    };
  }

  updateValue(text, field) {
    if (field == "descricao") {
      this.setState({ descricao: text });
    } else if (field == "classificacao") {
      this.setState({ classificacao: text });
    }
  }

  add = async () => {
    // var usuarioAutenticado;
    // usuarioAutenticado = await AsyncStorage.getItem("@IfReport:usuario");

    let collection = {};
    (collection.descricao = this.state.descricao),
      (collection.classificacao = this.state.classificacao),
      (collection.usuario = await AsyncStorage.getItem("@IfReport:usuario"));

    var url = "http://ifreport.hol.es/api/report/adiciona";
    // var data = {username: 'example'};

    fetch(url, {
      method: "POST", // or PUT
      body: JSON.stringify(collection),
      headers: new Headers({
        "Content-Type": "application/json"
      })
    })
      .then(res =>
        res.status == 200
          ? Alert.alert("Enviado!", "Obrigado pela sua contribuição!")
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
          <Text style={{ fontWeight: "bold" }}> Novo Report</Text>

          <TextInput
            style={styles.boxInputG}
            placeholder="Descrição..."
            value={this.state.descricao}
            onChangeText={text => this.updateValue(text, "descricao")}
            multiline
            autoFocus
          />

          <View>
            <Text style={{ fontWeight: "bold" }}>
              Como você classifica o seu comentário?
            </Text>

            <Picker
              selectedValue={this.state.classificacao}
              mode={"dialog"}
              style={{ height: 25, width: 150 }}
              onValueChange={itemValue =>
                this.setState({ classificacao: itemValue })
              }
            >
              <Picker.Item label="Crítica" value="Crítica" />
              <Picker.Item label="Sugestão" value="Sugestão" />
              <Picker.Item label="Elogio" value="Elogio" />
              <Picker.Item label="Outros" value="Outros" />
            </Picker>
          </View>

          <View style={styles.buttonContainer}>
            <TouchableOpacity
              style={styles.buttonCancel}
              onPress={() => this.props.navigation.navigate("LoadingLogin")}
            >
              <Text style={styles.buttonText}>Cancelar</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.buttonAdd}
              onPress={() => this.add()}
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
