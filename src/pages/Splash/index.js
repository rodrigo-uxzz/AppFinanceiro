import { StatusBar } from "expo-status-bar";
import { View, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import React, {useEffect} from "react";
import styles from './style';
import * as Animatable from "react-native-animatable";
import AsyncStorage from '@react-native-async-storage/async-storage';


export default function Splash({navigation}) {

    const recuperarObj = async () => {
            try {
                const user = await AsyncStorage.getItem("@Usuario");
                const login = await AsyncStorage.getItem("@Logado");
                if (user == null) {
                        navigation.replace('Cadastro')
                        return;      
                }else{

                    if (login !== null) {
                        navigation.replace('Home')    
                    }else{
                        navigation.replace('Login')
                    }
                }
            } catch (error) {
                console.log("Erro ao carregar", error);
            }
        };

    useEffect(() => {
        setTimeout(() => {
            recuperarObj();
        }, 3000);

    }, [])
    
    return(
        <View style={styles.Container}>
            
                
                <Animatable.Image 
                animation="bounceIn" duration={2000}
                source={require("../../../assets/Logo_do_banco_Inter_(2023).svg.png")}
                style={styles.logoSplash}
                />

            <StatusBar style="auto"/>  
        </View>
    );

}