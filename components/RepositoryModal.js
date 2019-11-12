import React from 'react';
import {
  Modal,
  TextInput,
  View,
  StyleSheet,
  TouchableOpacity,
  Text,
} from 'react-native';

export default class RepositoryModal extends React.Component {
  state = {
    owner: '',
    repository: '',
  };

  add = () => {
    this.props.onAdd(this.state.owner, this.state.repository);
    owner = '';
    repository = '';
    this.setState({owner, repository});
  };

  render() {
    return (
      <Modal
        visible={this.props.visible}
        animationType="fade"
        transparent={true}
        onRequestClose={() => {}}>
        <View style={styles.container}>
          <TextInput
            style={styles.boxInput}
            placeholder="Nome do Usuário"
            value={this.state.owner}
            onChangeText={text => this.setState({owner: text})}
            autoFocus
          />
          <TextInput
            style={styles.boxInput}
            placeholder="Nome do Repositório"
            value={this.state.repository}
            onChangeText={text => this.setState({repository: text})}
          />

          <View style={styles.buttonContainer}>
            <TouchableOpacity
              style={styles.buttonAdd}
              onPress={() => this.add()}>
              <Text style={styles.buttonText}>Adicionar</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.buttonCancel}
              onPress={() => this.props.onCancel()}>
              <Text style={styles.buttonText}>Cancelar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#rgba(0, 0, 0, 0.7)',
    alignContent: 'center',
    justifyContent: 'center',
    flex: 1,
  },

  boxInput: {
    alignSelf: 'stretch',
    height: 40,
    borderRadius: 5,
    backgroundColor: '#DDD',
    margin: 5,
  },

  buttonContainer: {
    alignContent: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
  },

  buttonAdd: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 40,
    width: 80,
    borderRadius: 5,
    backgroundColor: '#1c1c1c',
    margin: 5,
  },

  buttonCancel: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 40,
    width: 80,
    borderRadius: 5,
    backgroundColor: '#a9a9a9',
    margin: 5,
  },

  buttonText: {
    color: '#ffffff',
  },
});
