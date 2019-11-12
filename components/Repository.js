import React from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';

export default class Repository extends React.Component {
  render() {
    return (
      <View style={styles.box}>
        <Text style={styles.title}>ID Repositório: {this.props.id_repository}</Text>
        <Text style={styles.subtitle}>Descrição: {this.props.description}</Text>
        <Image
          style={{width: 50, height: 50}}
          source={{uri: ''+this.props.avatar_url}}
        />
        <Text style={styles.subtitle}>Nome: {this.props.owner}</Text>
        <Text style={styles.subtitle}>ID: {this.props.owner_id}</Text>
        <Text style={styles.subtitle}>Localização: {this.props.owner_location}</Text>

        <TouchableOpacity
          style={styles.buttonDel}
          onPress={() => this.props.onDell(this.props.repositoryid)}>
          <Text style={styles.buttonText}>Remover</Text>
        </TouchableOpacity>
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
});
