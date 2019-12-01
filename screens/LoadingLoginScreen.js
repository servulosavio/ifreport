import React from 'react';
import {View, StatusBar, ActivityIndicator, StyleSheet} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';

export default class LoadingLoginScreen extends React.Component {

    async componentDidMount() {
      this.init();
    }
  
    init = async () => {

      var usuario;
      try{
        usuario = await AsyncStorage.getItem("@IfReport:usuario");
      }catch(exception){}

      if(usuario){
        if(usuario === 'usuario'){
          this.props.navigation.navigate('StackUsuario');
        }
        else if(usuario === 'admin'){
          this.props.navigation.navigate('StackAdmin');
        }else{
          this.props.navigation.navigate('Login');
        }
      }else{
        this.props.navigation.navigate('Login');
      }
    };
  
    render() {
      return (
        <View style={styles.container}>
          <ActivityIndicator />
          <StatusBar barStyle="default" />
        </View>
      );
    }
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
