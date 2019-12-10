import React from "react";

import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  Image,
  Alert
} from "react-native";

import AsyncStorage from "@react-native-community/async-storage";

import Repository from "../components/Repository";
import RepositoryModal from "../components/RepositoryModal";
import Report from "../components/Report";
import LoadingModal from "../components/LoadingModal";

export default class HomeScreenAdmin extends React.Component {
  static navigationOptions = {
    drawerLabel: "Início",
    drawerIcon: ({ tintColor }) => (
      <Image
        source={require("../images/home-icon-silhouette.png")}
        style={styles.icon}
      ></Image>
    )
  };

  constructor(props) {
    super(props);
    this.state = {
      data: [],
      modalVisible: false
    };
  }

  openModal = () => {
    this.setState({ modalVisible: true });
  };

  closeModal = () => {
    this.setState({ modalVisible: false });
  };

  async componentDidMount() {
    this.readAll();
    this.readReports();
  }

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

  onAddReport = async () => {
    const apiCallReport = await fetch(
      "http://ifreport.hol.es/api/report/lista"
    );

    const response = await apiCallReport.json();

    const newReport = {
      id: Math.random() * 1000,
      id_report: response.id,
      descricao: response.descricao,
      classificacao: response.classificacao,
      usuario: response.usuario
    };

    const reports = [...this.state.reports, newReport];

    this.setState({
      reports
    });

    await AsyncStorage.setItem("@IFReport:reports", JSON.stringify(reports));
  };

  onCancel = () => {
    this.setState({ modalVisible: false });
  };

  onDell = async id => {
    reports = this.state.repositories;

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

  // LISTA TODOS OS REPORTS
  readReports = async () => {
    this.setState({ modalVisible: true });
    let URL = "http://ifreport.hol.es/api/report/lista";
    fetch(URL)
      .then(function(response) {
        let data = response.json();
        return data;
      })
      .then(json => {
        console.log("mensagens: ", json);
        this.setState({ data: json , modalVisible: false});
      })
      .catch(function(ex) {
        console.log("parsing failed", ex);
      });
  };

  delete = async (id) => {

    // const apiCall = await fetch(
    //   "https://api.github.com/repos/" + gitOwner + "/" + gitRepository
    // );
    // const response = await apiCall.json();
    Alert.alert(
      'Excluir?',
      'Deseja mesmo excluir esse Report?',
      [
        
        {
          text: 'Cancelar',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
        {text: 'Excluir', onPress: () => this.excluir(id)},
      ],
      {cancelable: true},
    );

    // const dell = await fetch("http://ifreport.hol.es/api/report/delete/"+id);
    // Alert.alert("Excluído!", "Report excluído com sucesso!");
    // this.readReports();
      
  }

  excluir = async (id) => {
    const dell = await fetch("http://ifreport.hol.es/api/report/delete/"+id);
    Alert.alert("Excluído!", "Report excluído com sucesso!");
    this.readReports();
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
        <Image source={require("../images/logo.png")} style={styles.logoTop} />
          <Text style={styles.headerText}> IF Report</Text>
        </View>

        <ScrollView style={styles.scroll}>
          {/* {this.state.repositories.map(repository => (
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
          ))} */}

          {this.state.data.map(obj => (
            <TouchableOpacity
              key={obj.id}
              onPress={()=> this.delete(obj.id)}
              // onPress={() => this.props.navigation.navigate("ReportDetails", {obj: this.props.key})}
            >
              <Report
                key={obj.id}
                descricao={obj.descricao}
                classificacao={obj.classificacao}
                usuario={obj.usuario}
                data_report={obj.data_report}
              />
            </TouchableOpacity>
          ))}
        </ScrollView>
        <LoadingModal modalVisible={this.state.modalVisible} />
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
    // justifyContent: "space-between",
    height: 60,
    backgroundColor: "green",
    flexDirection: "row",
    // paddingTop: 20,
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
  },

  icon: {
    height: 20,
    width: 20
  },

  logoTop: {
    height: 50,
    width: 50
  }
});
