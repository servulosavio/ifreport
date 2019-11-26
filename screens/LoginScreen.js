import React from "react";
import {
  StyleSheet,
  View,
  TextInput,
  Text,
  TouchableOpacity,
  CheckBox,
  Image
} from "react-native";

import Repository from "../components/Repository";
import LoadingModal from "../components/LoadingModal";
import AsyncStorage from "@react-native-community/async-storage";

export default class NewReportScreen extends React.Component {
  // static navigationOptions = {
  //   drawerLabel: "Reportar",
  //   drawerIcon: ({ tintColor }) => (
  //     <Image
  //       source={require("../images/paper-plane.png")}
  //       style={styles.icon}
  //     ></Image>
  //   )
  // };

  state = {
    usuario: '',
    senha: '',
    modalVisible: false
  };

  login = async () => {
    if (this.state.usuario.trim().length == 0 || this.state.senha.trim().length == 0) {
      alert("Insira Ligin e Senha!");
    } else {
      this.setState({ modalVisible: true });

      var usuario = this.state.usuario;
      var senha = this.state.senha;

      try {
        if (usuario === "usuario" && senha === "123") {
          await AsyncStorage.setItem("@IfReport:usuario", usuario);
          this.setState({ modalVisible: false });

          this.props.navigation.navigate("StackUsuario");
        }
      } catch (erro) {
        this.setState({ modalVisible: false });
        alert("Erro: " + erro);
      }
    }
  };

  render() {
    return (
      <View style={styles.container}>
        <View>
          {/* <Text> Novo Report</Text> */}

          <TextInput
            style={styles.boxInput}
            autoFocus
            placeholder="Usuário"
            autoCapitalize='none'
            keyboardType='default'
            value={this.state.login}
            onChangeText={usuario => this.setState({usuario})}
            
          />

          <TextInput
            style={styles.boxInput}
            placeholder="Senha"
            autoCapitalize='none'
            secureTextEntry={true}
            value={this.state.senha}
            onChangeText={senha => this.setState({senha})}
            
          />

          <View style={styles.buttonContainer}>
            <TouchableOpacity
              style={styles.buttonAdd}
              onPress={() => this.login()}
            >
              <Text style={styles.buttonText}>Entrar</Text>
            </TouchableOpacity>
          </View>
        </View>

        <LoadingModal modalVisible={this.state.modalVisible} />

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

  icon: {
    height: 20,
    width: 20
  }
});
