import { StatusBar } from 'expo-status-bar';
import { Text, View, TextInput, Image, Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from "./style";
import React, { useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import * as Animatable from "react-native-animatable";


export default function App() {
    const navigation = useNavigation();
    const [nome, setNome] = useState("");
    const [cpf, setCpf] = useState("");
    const [dataNasc, setDataNasc] = useState("");
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");

    const addObj = async () => {
      const usuario={
        nome: nome,
        cpf: cpf,
        dataNasc: dataNasc,
        email: email,
        senha: senha
      }

      await AsyncStorage.setItem("@Usuario", JSON.stringify(usuario) )
      navigation.replace("Login")
      console.log("Salvo com sucesso")

  }

  return (
    <Animatable.View 
    animation="bounceInRight"
    duration={200}
    style={styles.container}>
        {/* <View style={styles.v1}>
            <Pressable 
              onPress={() => navigation.navigate('Login')}
              style={({pressed}) => [
                styles.iconsTop,
                pressed && styles.iconsPressTop
              ]}>
                <Image 
                source={require("../../../assets/seta.png")}
                style={styles.setaimg}
                />
                </Pressable>
        </View> */}

        <View style={styles.v2}>

            <Text style={styles.textoA}>Boas vindas ao Inter e à uma vida financeira mais inteligente!</Text>
            
            <Text style={styles.textoMini}>Nome de quem vai usar a conta</Text>
            <TextInput
                style={styles.cadastro}
                placeholder="Nome completo"
                placeholderTextColor={'#888282'}
                value={nome}
                onChangeText={setNome}
                />

            <Text style={styles.textoMini}>Seu CPF</Text>
            <TextInput
                style={styles.cadastro}
                placeholder='CPF'
                placeholderTextColor={'#888282'}
                value={cpf}
                onChangeText={setCpf}
                />

            <Text style={styles.textoMini}>Data de nascimento</Text>
            <TextInput
                style={styles.cadastro}
                placeholder='dd/mm/aaaa'
                placeholderTextColor={'#888282'}
                value={dataNasc}
                onChangeText={setDataNasc}
            />
            
            <Text style={styles.textoMini}>Seu e-mail</Text>
            <TextInput
                style={styles.cadastro}
                placeholder='e-mail'
                placeholderTextColor={'#888282'}
                value={email}
                onChangeText={setEmail}
                
            />

            <Text style={styles.textoMini}>Senha</Text>
            <TextInput
                style={styles.cadastro}
                placeholder='senha'
                placeholderTextColor={'#888282'}
                value={senha}
                onChangeText={setSenha}
                
            />   

        </View>
        <View style={styles.v3}>

            <Pressable 
                onPress={addObj}
                style={({pressed}) => [
                styles.batom1,
                pressed && styles.batomPress1,
              ]}
              >
                <Text style={styles.texto1}>Criar</Text> 
            </Pressable>

        </View>

      <StatusBar style="auto" />
    </Animatable.View>
  );
}
