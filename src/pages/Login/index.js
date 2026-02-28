import { StatusBar } from 'expo-status-bar';
import { Text, View, TextInput, Image, Pressable, Modal } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from "./style";
import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { useState } from "react";
import * as Animatable from "react-native-animatable";


export default function App() {
  const navigation = useNavigation();
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  

  const verificar = async () => {
    try{
      const obj = await AsyncStorage.getItem("@Usuario");
      const valor = JSON.parse(obj)
      if(obj === null){
        alert("Usuário não cadastrado")
        setTimeout(() => { 
        navigation.replace('Cadastro')
        return;
        }, 100);
      }else{
        if (email === valor.email && senha === valor.senha) {
          await AsyncStorage.setItem("@Logado", "true")
          setTimeout(() => {
            navigation.replace('Home')
          }, 200);
          
        }else{
          alert("Email ou senha incorretos")
        }
      }
  } catch (error) {
    console.log("Erro ao carregar", error);
  }
}
  return (
    <Animatable.View 
    animation="bounceInLeft"
    duration={200}
    style={styles.container}>
      <View style={styles.v1}>
            <Image 
            source={require("../../../assets/laele.png")}
            style={styles.iconsTop}
            />
      </View>

      {/* parte do login */}
        <View style={styles.v2}>
            
            <Image 
            source={require("../../../assets/Logo_do_banco_Inter_(2023).svg.png")}
            style={styles.logoSplash}
            />

            <TextInput
                style={styles.login}
                placeholder="Usuário"
                value={email}
                onChangeText={(text) => setEmail(text)}
            />
            <TextInput
                style={styles.login}
                placeholder='Senha'
                value={senha}
                onChangeText={(text) => setSenha(text)}
            />

            {/* Botoes */}

            <Pressable 
              onPress={verificar}
              style={({pressed}) => [
                styles.batom1,
                pressed && styles.batomPress1
              ]}
              >
                <Text style={styles.texto1}>Entrar</Text> 
            </Pressable>

            <Pressable 
              style={({pressed}) => [
                styles.batom2,
                pressed && styles.batomPress2
              ]}
              >
                <Text style={styles.texto2}>Esqueci minha senha</Text>
            </Pressable>

            <Pressable 
              onPress={() => navigation.navigate('Cadastro')}
              style={({pressed}) => [
                styles.text3,
                pressed && styles.textPress3
              ]}
              >
                <Text style={styles.texto3}>Você não tem conta? Cadastre-se</Text>
            </Pressable>

        </View>


      <StatusBar style="auto" />
    </Animatable.View>
  );
}


