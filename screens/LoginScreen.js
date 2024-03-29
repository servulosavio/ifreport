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

export default class LoginScreen extends React.Component {

  state = {
    usuario: "",
    senha: "",
    modalVisible: false
  };

  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     data: []
  //   };
  // }

  // async componentDidMount() {
  //   this.readAvisos();
  //   console.warn("Teste: ", this.state.data.usuario.nome);
  // }


  // // LISTAR TODOS OS AVISOS
  // readAvisos = async () => {
  //   // this.setState({ modalVisible: true });

  //   let URL = "http://ifreport.hol.es/api/usuario/lista";
  //   fetch(URL)
  //     .then(function(response) {
  //       let data = response.json();
  //       return data;
        
  //     })
  //     .then(json => {
  //       // console.log("mensagens: ", json);
  //       this.setState({ data: json, modalVisible: false });
  //     })
  //     // .catch(function(ex) {
  //     //   console.log("parsing failed", ex);
  //     // })
  //     ;
  //     console.warn(data);
      

      

  // };



  // login = async () => {
    
  //   if (
  //     this.state.usuario.trim().length == 0 ||
  //     this.state.senha.trim().length == 0
  //   ) {
  //     Alert.alert("Ops...", "Insira o Usuário e Senha para continuar!");
  //   } else {
  //     this.setState({ modalVisible: true });

  //     var usuario = this.state.data.map(user => user.email);
  //     var senha = this.state.data.map(user => user.senha);

  //     try {
  //       if (usuario === usuario && senha === senha) {
  //         await AsyncStorage.setItem("@IfReport:usuario", usuario);
  //         this.setState({ modalVisible: false });

  //         this.props.navigation.navigate("StackUsuario");
  //       } else if (usuario === "admin" && senha === "123") {
  //         await AsyncStorage.setItem("@IfReport:usuario", usuario);
  //         this.setState({ modalVisible: false });

  //         this.props.navigation.navigate("StackAdmin");
  //       } else {
  //         this.setState({ modalVisible: false });
  //         Alert.alert(
  //           "Erro ao tentar fazer login...",
  //           "Confira Usuário e Senha e tente novamente!"
  //         );
  //       }
  //     } catch (erro) {
  //       this.setState({ modalVisible: false });
  //       Alert.alert("Erro ao Fazer Login", erro);
  //     }
  //   }
  // };
  


  login = async () => {
    if (
      this.state.usuario.trim().length == 0 ||
      this.state.senha.trim().length == 0
    ) {
      Alert.alert("Ops...", "Insira o Usuário e Senha para continuar!");
    } else {
      this.setState({ modalVisible: true });

      var usuario = this.state.usuario;
      var senha = this.state.senha;

      try {
        if (usuario === "usuario" && senha === "123") {
          await AsyncStorage.setItem("@IfReport:usuario", usuario);
          this.setState({ modalVisible: false });

          this.props.navigation.navigate("StackUsuario");
        } else if (usuario === "admin" && senha === "123") {
          await AsyncStorage.setItem("@IfReport:usuario", usuario);
          this.setState({ modalVisible: false });

          this.props.navigation.navigate("StackAdmin");
        } else {
          this.setState({ modalVisible: false });
          Alert.alert(
            "Erro ao tentar fazer login...",
            "Confira Usuário e Senha e tente novamente!"
          );
        }
      } catch (erro) {
        this.setState({ modalVisible: false });
        Alert.alert("Erro ao Fazer Login", erro);
      }
    }
  };

  render() {
    return (
      <View style={styles.container}>

      
        <View>
          {/* <Text> Novo Report</Text> */}

          <View style={styles.logoContainer}>
            <Image source={require("../images/logo.png")} style={styles.logo} />
          </View>

          <TextInput
            style={styles.boxInput}
            autoFocus
            placeholder="Usuário"
            autoCapitalize="none"
            keyboardType="default"
            value={this.state.login}
            onChangeText={usuario => this.setState({ usuario })}
          />

          <TextInput
            style={styles.boxInput}
            placeholder="Senha"
            autoCapitalize="none"
            secureTextEntry={true}
            value={this.state.senha}
            onChangeText={senha => this.setState({ senha })}
          />

          <View style={{ margin: 5 }}>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate("NewUser")}
            >
              <Text>Criar novo usuario</Text>
            </TouchableOpacity>
          </View>

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

  logo: {
    height: 200,
    width: 200
  },

  logoContainer: {
    alignItems: "center",
    justifyContent: "center"
  }
});
