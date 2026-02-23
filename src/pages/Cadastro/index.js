import { StatusBar } from 'expo-status-bar';
import { Text, View, TextInput, Image, Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from "./style";

export default function App() {
  return (
    <View style={styles.container}>
        <View style={styles.v1}>
            <Image 
            source={require("../../../assets/Logo_do_banco_Inter_(2023).svg.png")}
            style={styles.logoSplash}
            />
        </View>

        <View style={styles.v2}>

            <Text style={styles.textoA}>Boas vindas ao Inter e à uma vida financeira mais inteligente!</Text>
            <TextInput
                style={styles.cadastro}
                placeholder="Nome completo"
                />

            <TextInput
                style={styles.cadastro}
                placeholder='CPF'
                />

            <TextInput
                style={styles.cadastro}
                placeholder='e-mail'
            />

            <TextInput
                style={styles.cadastro}
                placeholder='celular'
            />   

        </View>
        <View style={styles.v3}>

            <Pressable 
              style={({pressed}) => [
                styles.batom1,
                pressed && styles.batomPress1
              ]}
              >
                <Text style={styles.texto1}>Entrar</Text> 
            </Pressable>

        </View>

      <StatusBar style="auto" />
    </View>
  );
}
