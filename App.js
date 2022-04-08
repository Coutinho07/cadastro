import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, Alert } from 'react-native';
import { color } from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes';
import axios from 'axios';


export default function App() {

    const [nome, setNome] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [senha, setSenha] = React.useState('');
    
    //inciando chamada de api
    async function consumindoApi(){
      const api = await axios.post("http://localhost:3000/auth/register", {
        name: nome, 
        email: email, 
        password: senha
      
        
      }).then( (response) =>{ 
        console.log(response);
        Alert.alert('cadastro realizado com sucesso!');
       
      }).catch(function (error) {
        console.log(error);
         Alert.alert('erro no cadastro!');
       
      });
      return console.log(api);
    }
    


    const cadastro = () => {
      consumindoApi();
    }

  return (
    <View style={styles.container}>    
      <StatusBar hidden />

      <Image style={{width:200,height:180}} source={require('./assets/logo.jpg')} />

      <TextInput placeholder='Nome' style={styles.textInput} onChangeText={text=>setNome(text)} />
      <TextInput placeholder='Email' style={styles.textInput} onChangeText={text=>setEmail(text)} />
      <TextInput secureTextEntry={true} placeholder='Senha' style={styles.textInput} onChangeText={text=>setSenha(text)} />

      <TouchableOpacity style={styles.btnCadastro} onPress={()=>cadastro()}>
        <Text style={{color:'white',textAlign:'center'}} >CADASTRAR!</Text>
      </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#CFB53B',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textInput:{
    width:'90%',
    height:40,
    backgroundColor:'white',
    borderRadius:20,
    paddingLeft:10,
    marginBottom:10
  },
  btnCadastro:{
    width:'50%',
    height: 40,
    backgroundColor: 'blue',
    borderRadius: 20,
    justifyContent: 'center'
  }
});
