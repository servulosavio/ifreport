import React from "react";

import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  Image
} from "react-native";

import AsyncStorage from "@react-native-community/async-storage";

import Repository from "../components/Repository";
import RepositoryModal from "../components/RepositoryModal";
import Report from "../components/Report";
import Aviso from "../components/Aviso";
import LoadingModal from "../components/LoadingModal";
import { clear } from "sisteransi";

export default class HomeScreenUser extends React.Component {
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
    this.readAvisos();
  }

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

  
  // LISTAR TODOS OS AVISOS
  readAvisos = async () => {
    this.setState({ modalVisible: true });
    
    let URL = "http://ifreport.hol.es/api/aviso/lista";
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

  render() {
    return (
      <View style={styles.container}>

        

        <View style={styles.header}>
          <Image source={require("../images/logo.jpg")} style={styles.logoTop} />
          <Text style={styles.headerText}> IF Report</Text>
        </View>

        <ScrollView style={styles.scroll}>   

          {this.state.data.map(obj => (
            <Aviso
              key={obj.id}
              titulo={obj.titulo}
              mensagem={obj.mensagem}
              usuario={obj.usuario}
              data_aviso={obj.data_aviso}
            />
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
