import React from "react";
import { StyleSheet, View, TextInput } from "react-native";

import Repository from "../components/Repository";

export default class ReportDetailsScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <TextInput
          style={styles.boxInput}
          placeholder="Nome do Usuário"
          // value={this.state.owner}
          // onChangeText={text => this.setState({owner: text})}
          autoFocus
        />
        <TextInput
          style={styles.boxInput}
          placeholder="Nome do Repositório"
          // value={this.state.repository}
          // onChangeText={text => this.setState({repository: text})}
        />

        <View style={styles.buttonContainer}>
          {/* <TouchableOpacity
              style={styles.buttonAdd}
              onPress={() => this.add()}>
              <Text style={styles.buttonText}>Adicionar</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.buttonCancel}
              onPress={() => this.props.onCancel()}>
              <Text style={styles.buttonText}>Cancelar</Text>
            </TouchableOpacity> */}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    backgroundColor: "#rgba(0, 0, 0, 0.7)",
    alignContent: "center",
    justifyContent: "center",
    flex: 1
  },

  boxInput: {
    alignSelf: "stretch",
    height: 40,
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
    backgroundColor: "#1c1c1c",
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
  }
});
