import React, { useState } from 'react';
import {
  View, StyleSheet
} from 'react-native';
import {H1, H2, Button, Spacer, TextInput} from '../components/';

const Home = ({navigation}) => {
  
  const [name, setName] = useState<string>("")

  const prosseguir = () => {
    navigation.navigate('Questions')
  }

  return (
    <View style={styles.container}>
      <View style={{flex: 2}}>
        <H1 style={styles.text}>
          Bem vindo ao Quiz App
        </H1>
      </View>
      <View style={styles.inputName}>
        <H2 style ={styles.text}>
          Insira o seu nome para continuarmos...
        </H2>
        <TextInput  value={name} onChangeText={text => setName(text)}/>
        <Spacer size={8}/>
        <Button text="Prosseguir" style={{alignSelf: 'flex-end'}} onPress={prosseguir}/>
      </View>
      <View style={{flex: 1}}>

      </View>
    </View>
   
  );
};

const styles = StyleSheet.create({
  container : {
    flex: 1,
    padding: 24,
  },
  text: {
    color: "#006960"
  },

  inputName: {
    flex: 2,
  }
});

export default Home;
