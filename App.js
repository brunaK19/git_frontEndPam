import { LinearGradient} from 'expo-linear-gradient';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Button, Image  } from 'react-native';
import { Entypo } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import React from 'react';
import estilo from './src/estilo';

export default function App() {
  return (
    <View style={estilo.container}>
      <LinearGradient  
      colors = {['black','#FF4500']}
      style = { estilo.gradientBackground}>
       
       <Image source ={{uri:'https://images.vexels.com/media/users/3/146888/isolated/preview/1e91f6545e3496c986ba7064379d2ad9-ilustracao-de-queima-de-fogo.png'}}
       
       style={estilo.imagem}
       />

      </LinearGradient>
      {/*View com entrada para dados*/ }
      <View style={estilo.box}>

        <View style={estilo.viewIcons}> 
          <AntDesign name="user" size={24} color="black" />
          <TextInput style={estilo.input} placeholder="E-mail:"/>
        </View>

        <View style={estilo.viewIcons}>
          <Entypo name="key" size={24} color="black" />
          <TextInput style={estilo.input} placeholder="Senha:"/>
        </View>
        
        <TouchableOpacity style={{width:'80%'}}>
          <LinearGradient 
          colors={['#D2691E', '#FF4500']} 
          style={estilo.button}>

            <Text style={estilo.text}>ENTRAR</Text>

          </LinearGradient>
        </TouchableOpacity>
      </View>
    </View>
  );
}


