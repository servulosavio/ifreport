import React from 'react';
import {View, StatusBar, ActivityIndicator, StyleSheet} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';

export default class LoadingLoginScreen extends React.Component {

    async componentDidMount() {
      this.init();
    }
  
    init = async () => {

      var email;
      try{
        email = await AsyncStorage.getItem("@StudentList:email");
      }catch(exception){}

      if(email){
        if(email === 'elenilsonvieira@gmail.com'){
          this.props.navigation.navigate('StackUsuario');
        }
        else if(email === 'elenilson.vieira@ifrn.edu.br'){
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
