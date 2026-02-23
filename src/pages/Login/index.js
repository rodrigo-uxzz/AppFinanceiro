import { StatusBar } from 'expo-status-bar';
import { Text, View, TextInput, Image, Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from "./style";

export default function App() {
  const navigation = useNavigation();
  
  return (
    <View style={styles.container}>
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
            />
            <TextInput
                style={styles.login}
                placeholder='Senha'
            />

            {/* Botoes */}

            <Pressable 
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
    </View>
  );
}

