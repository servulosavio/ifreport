import React from "react";
import {
  StyleSheet,
  View,
  TextInput,
  Text,
  TouchableOpacity,
  Alert,
  CheckBox,
  Image
} from "react-native";

import Repository from "../components/Repository";
import LoadingModal from "../components/LoadingModal";
import AsyncStorage from "@react-native-community/async-storage";

export default class NewUserScreen extends React.Component {
  // static navigationOptions = {
  //   drawerLabel: "Reportar",
  //   drawerIcon: ({ tintColor }) => (
  //     <Image
  //       source={require("../images/paper-plane.png")}
  //       style={styles.icon}
  //     ></Image>
  //   )
  // };

  constructor() {
    super();
    this.state = {
      nome: "",
      email: "",
      senha: "",
      tipo: ""
    };
  }

  updateValue(text, field) {
    if (field == "nome") {
      this.setState({ nome: text });
    } 
    
    else if (field == "email") {
      this.setState({ email: text });
    }
    
    else if (field == "senha") {
      this.setState({ senha: text });
    }
  }

  add = () => {
    // var usuarioAutenticado;
    // usuarioAutenticado = await AsyncStorage.getItem("@IfReport:usuario");

    let collection = {};
    (collection.nome = this.state.nome),
      (collection.email = this.state.email),
      (collection.senha = this.state.senha),
      (collection.tipo = 0);

    var url = "http://ifreport.hol.es/api/usuario/adiciona";
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
          ? Alert.alert("Cadastrado!", "Efetue o login!")
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

    this.props.navigation.navigate("LoadingLogin");
  };

  render() {
    return (
      <View style={styles.container}>
        <View>
          <View style={styles.logoContainer}>
            <Image source={require("../images/logo.png")} style={styles.logo} />
          </View>

          <Text style={styles.title}>Novo Usuário</Text>

          <TextInput
            style={styles.boxInput}
            autoFocus
            placeholder="Nome"
            autoCapitalize="none"
            keyboardType="default"
            value={this.state.nome}
            onChangeText={text => this.updateValue(text, "nome")}
          />

          <TextInput
            style={styles.boxInput}
            autoFocus
            placeholder="E-mail"
            autoCapitalize="none"
            keyboardType="default"
            value={this.state.email}
            onChangeText={text => this.updateValue(text, "email")}
          />

          <TextInput
            style={styles.boxInput}
            placeholder="Senha"
            autoCapitalize="none"
            secureTextEntry={true}
            value={this.state.senha}
            onChangeText={text => this.updateValue(text, "senha")}
          />

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
              <Text style={styles.buttonText}>Cadastrar</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* <LoadingModal modalVisible={this.state.modalVisible} /> */}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    color: "black",
    fontWeight: "bold",
    margin: 10,
    textAlign: "center"
  },

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
  }
});
