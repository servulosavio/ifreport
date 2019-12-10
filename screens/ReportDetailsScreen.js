import React from "react";
import { StyleSheet, View, TextInput, Text } from "react-native";

import Repository from "../components/Repository";

export default class ReportDetailsScreen extends React.Component {
  
  state = {
    descricao: '',
    classificacao: '',
    usuario: '',
    data_report: ''
  }


  async componentDidMount() {
    

    const apiCall = await fetch("http://ifreport.hol.es/api/report/detalhe/"+id);
    const response = await apiCall.json();
    
    console.warn(response);

    this.setState.descricao = response.descricao;
    this.setState.classificacao = response.classificacao;
    this.setState.usuario = response.usuario;
    this.setState.data_report = response.data_report;
    

    
    

  };
  
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerText}>IF Report</Text>
        </View>



        <Text>{this.state.descricao}</Text>
        {/* <Text style={{ marginTop: 10, marginBottom: 10, fontWeight: "bold" }}>{this.props.classificacao}</Text>
        <Text style={{ marginBottom: 10 }}>{this.props.usuario}</Text>
        <Text style={{ textAlign: "right", fontSize: 10 }}>{this.props.data_report}</Text> */}

        

        
        
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
  },

  icon: {
    height: 20,
    width: 20
  }
});
