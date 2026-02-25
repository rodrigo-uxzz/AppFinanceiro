import { StatusBar } from "expo-status-bar";
import { View, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import React, {useEffect} from "react";
import styles from './style';
import * as Animatable from "react-native-animatable";



export default function Splash({navigation}) {

    useEffect(() => {
        setTimeout(() => {
            navigation.replace("Login");
        }, 3000);
        
        const recuperarObj = async () => {
            try {
                const obj = await AsyncStorage.getItem("@Aluno");
                if (obj !== null) {
                    
                    const valor = JSON.parse(obj)
                    console.log(valor.idade)
                }
            } catch (error) {
                console.log("Erro ao carregar", error);
            }
        };
    }, []); 
    
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