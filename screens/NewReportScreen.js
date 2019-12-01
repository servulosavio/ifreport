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

import { RNCamera } from "react-native-camera";

import Repository from "../components/Repository";

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

  render() {
    return (
      <View style={styles.container}>
        <Text> Novo Report</Text>

        <TextInput
          style={styles.boxInputG}
          placeholder="Descrição..."
          // value={this.state.owner}
          // onChangeText={text => this.setState({owner: text})}
          multiline
          autoFocus
        />

        {/* <TextInput
          style={styles.boxInput}
          placeholder="Nome do Repositório"
          // value={this.state.repository}
          // onChangeText={text => this.setState({repository: text})}
        /> */}

        <View style={{ flexDirection: "column", marginBottom: 10, marginTop: 10 }}>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate("Cam")}
          >
            <View style={{ flexDirection: "row", marginBottom: 10 }}>
              <Image
                source={require("../images/photo-camera.png")}
                style={styles.icon}
              />

              <Text style={styles.buttonText2}> Capturar Imagem</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
          //   onPress={() => this.add()}
          >
            <View style={{ flexDirection: "row" }}>
              <Image
                source={require("../images/picture.png")}
                style={styles.icon}
              />

              <Text style={styles.buttonText2}> Inserir Imagem</Text>
            </View>
          </TouchableOpacity>
          
        </View>

        <Text> Como você classifica o seu comentário?</Text>

        <View style={{ flexDirection: "row", justifyContent: "space-around" }}>
          <View style={{ flexDirection: "column" }}>
            <View style={{ flexDirection: "row" }}>
              <CheckBox
              //   value={this.state.checked}
              //   onValueChange={() => this.setState({ checked: !this.state.checked })}
              />
              <Text style={{ marginTop: 5 }}> Crítica</Text>
            </View>
            <View style={{ flexDirection: "row" }}>
              <CheckBox
              //   value={this.state.checked}
              //   onValueChange={() => this.setState({ checked: !this.state.checked })}
              />
              <Text style={{ marginTop: 5 }}> Sugestão</Text>
            </View>
          </View>

          <View style={{ flexDirection: "column" }}>
            <View style={{ flexDirection: "row" }}>
              <CheckBox
              //   value={this.state.checked}
              //   onValueChange={() => this.setState({ checked: !this.state.checked })}
              />
              <Text style={{ marginTop: 5 }}> Elogio</Text>
            </View>
            <View style={{ flexDirection: "row" }}>
              <CheckBox
              //   value={this.state.checked}
              //   onValueChange={() => this.setState({ checked: !this.state.checked })}
              />
              <Text style={{ marginTop: 5 }}> Outros</Text>
            </View>
          </View>
        </View>

        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.buttonCancel}
            onPress={() => this.props.navigation.navigate("Home")}
          >
            <Text style={styles.buttonText}>Cancelar</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.buttonAdd}
            //   onPress={() => this.add()}
          >
            <Text style={styles.buttonText}>Enviar</Text>
          </TouchableOpacity>
        </View>
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

  buttonText2: {
    color: "#000000"
  },

  icon: {
    height: 20,
    width: 20
  }
});
