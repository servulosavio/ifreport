import React from "react";

import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity
} from "react-native";

import AsyncStorage from "@react-native-community/async-storage";

import Repository from "../components/Repository";
import RepositoryModal from "../components/RepositoryModal";

export default class HomeScreen extends React.Component {
  state = {
    repositories: [],
    modalVisible: false
  };

  openModal = () => {
    this.setState({ modalVisible: true });
  };

  closeModal = () => {
    this.setState({ modalVisible: false });
  };

  async componentDidMount() {
    this.readAll();
  }

  // clear = async () => {
  //   await AsyncStorage.clear();
  //   this.readAll();
  // };

  // eslint-disable-next-line prettier/prettier
  onAdd = async (gitOwner, gitRepository) => {
    const apiCall = await fetch(
      "https://api.github.com/repos/" + gitOwner + "/" + gitRepository
    );
    const response = await apiCall.json();

    const apiUser = await fetch(response.owner.url);
    const responseUser = await apiUser.json();

    const newRepository = {
      id: Math.random() * 1000,
      id_repository: response.id,
      description: response.description,
      avatar_url: response.owner.avatar_url,
      owner: response.owner.login,
      owner_id: response.owner.id,
      owner_location: responseUser.location
    };

    //this.onAdd(response.id, response.description, response.owner.login, response.owner.id, responseUser.location);

    const repositories = [...this.state.repositories, newRepository];

    this.setState({
      repositories,
      modalVisible: false
    });

    await AsyncStorage.setItem(
      "@ProjetoTest:repositories",
      JSON.stringify(repositories)
    );
  };

  onCancel = () => {
    this.setState({ modalVisible: false });
  };

  onDell = async id => {
    repositories = this.state.repositories;

    var i;
    for (i = 0; i < repositories.length; i++) {
      if (repositories[i].id === id) {
        repositories.splice(i, 1);

        break;
      }
    }
    this.setState({ repositories });
    await AsyncStorage.setItem(
      "@ProjetoTest:repositories",
      JSON.stringify(repositories)
    );
  };

  readAll = async () => {
    repositories =
      JSON.parse(await AsyncStorage.getItem("@ProjetoTest:repositories")) || [];

    this.setState({ repositories });
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerText}>IF Report</Text>

          <TouchableOpacity
            onPress={() => this.props.navigation.navigate("NewReport")}
          >
            <Text style={styles.headerButton}>+</Text>
          </TouchableOpacity>

          {/* <TouchableOpacity onPress={() => this.clear()}>
            <Text style={styles.headerButton}>-</Text>
          </TouchableOpacity> */}
        </View>

        <ScrollView style={styles.scroll}>
          {this.state.repositories.map(repository => (
            <TouchableOpacity
              key={repository.id}
              onPress={() =>
                this.props.navigation.navigate("ReportDetails", {
                  repository: repository
                })
              }
            >
              <Repository
                key={repository.id}
                id_repository={repository.id_repository}
                description={repository.description}
                avatar_url={repository.avatar_url}
                owner={repository.owner}
                owner_id={repository.owner_id}
                owner_location={repository.owner_location}
                onDell={this.onDell}
                repositoryid={repository.id}
              />
            </TouchableOpacity>
          ))}

          {/* ##### APENAS PARA DEMONSTRAÇÃO */}
          <View style={styles.caixa}>
            <Text>
              Há um vazamento no esgoto da pia do banheiro masculino, no segundo
              piso do bloco principal
            </Text>
            <Text style={{marginTop: 10, marginBottom: 10, fontWeight: "bold"}}>Sugestão</Text>
            <Text style={{marginBottom: 10}}>
              Sérvulo Sávio - 20162094040002
            </Text>
            <Text style={{textAlign: "right", fontSize: 10}}>
              11 de novembro de 2019
            </Text>
          </View>

          <View style={styles.caixa}>
            <Text>
              O jardim está muito bem cuidado!
            </Text>
            <Text style={{marginTop: 10, marginBottom: 10, fontWeight: "bold"}}>Elogio</Text>
            <Text style={{marginBottom: 10}}>
              Francisco das Cachorras - 20162098404009
            </Text>
            <Text style={{textAlign: "right", fontSize: 10}}>
              11 de novembro de 2019
            </Text>
          </View>

          {/* //##### FIM DE DEMONSTRAÇÃO  */}
        </ScrollView>

        <RepositoryModal
          visible={this.state.modalVisible}
          onCancel={this.closeModal}
          onAdd={this.onAdd}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  },

  scroll: {
    marginTop: 35,
    margin: 10
  },

  box: {
    margin: 5,
    padding: 20,
    backgroundColor: "#E2E2E2",
    alignItems: "center",
    justifyContent: "center"
  },

  title: {
    fontSize: 15,
    color: "black",
    fontWeight: "bold"
  },

  subtitle: {
    fontSize: 10
  },

  header: {
    alignItems: "center",
    justifyContent: "space-between",
    height: 60,
    backgroundColor: "green",
    flexDirection: "row",
    paddingTop: 20,
    paddingHorizontal: 20
  },

  headerText: {
    fontWeight: "bold",
    fontSize: 22,
    color: "white"
  },

  headerButton: {
    fontWeight: "bold",
    fontSize: 30,
    color: "white"
  },

  caixa: {
    margin: 5,
    padding: 20,
    backgroundColor: "#E2E2E2",
    justifyContent: "center"
  }
});
