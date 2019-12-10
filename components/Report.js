import React from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';

export default class Report extends React.Component {
  render() {
    return (
      <View style={styles.caixa}>
        <Text>{this.props.descricao}</Text>
        <Text style={{ marginTop: 10, marginBottom: 10, fontWeight: "bold" }}>{this.props.classificacao}</Text>
        <Text style={{ marginBottom: 10 }}>{this.props.usuario}</Text>
        <Text style={{ textAlign: "right", fontSize: 10 }}>{this.props.data_report}</Text>
      </View>    
    );
  }
}

const styles = StyleSheet.create({
  box: {
    margin: 5,
    padding: 20,
    backgroundColor: '#E2E2E2',
    alignItems: 'center',
    justifyContent: 'center',
  },

  title: {
    fontSize: 15,
    color: 'black',
    fontWeight: 'bold',
  },

  subtitle: {
    fontSize: 10,
  },

  buttonDel: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 40,
    width: 80,
    borderRadius: 5,
    backgroundColor: 'red',
    margin: 5,
  },

  buttonText: {
    color: '#ffffff',
  },

  caixa: {
    margin: 5,
    padding: 20,
    backgroundColor: "#E2E2E2",
    justifyContent: "center"
  },

});
