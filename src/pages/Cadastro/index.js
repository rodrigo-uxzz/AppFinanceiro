import { StatusBar } from 'expo-status-bar';
import { Text, View, TextInput, Image, Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from "./style";

export default function App() {
    const navigation = useNavigation();

  return (
    <View style={styles.container}>
        <View style={styles.v1}>
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
        </View>

        <View style={styles.v2}>

            <Text style={styles.textoA}>Boas vindas ao Inter e à uma vida financeira mais inteligente!</Text>
            
            <Text style={styles.textoMini}>Nome de quem vai usar a conta</Text>
            <TextInput
                style={styles.cadastro}
                placeholder="Nome completo"
                placeholderTextColor={'#888282'}
                />

            <Text style={styles.textoMini}>Seu CPF</Text>
            <TextInput
                style={styles.cadastro}
                placeholder='CPF'
                placeholderTextColor={'#888282'}
                />

            <Text style={styles.textoMini}>Data de nascimento</Text>
            <TextInput
                style={styles.cadastro}
                placeholder='dd/mm/aaaa'
                placeholderTextColor={'#888282'}
            />
            
            <Text style={styles.textoMini}>Seu e-mail</Text>
            <TextInput
                style={styles.cadastro}
                placeholder='e-mail'
                placeholderTextColor={'#888282'}
            />

            <Text style={styles.textoMini}>Seu número de celular</Text>
            <TextInput
                style={styles.cadastro}
                placeholder='celular'
                placeholderTextColor={'#888282'}
            />   

        </View>
        <View style={styles.v3}>

            <Pressable 
                onPress={() => navigation.navigate('Login', { showSuccessModal: true })}
                style={({pressed}) => [
                styles.batom1,
                pressed && styles.batomPress1,
              ]}
              >
                <Text style={styles.texto1}>Criar</Text> 
            </Pressable>

        </View>

      <StatusBar style="auto" />
    </View>
  );
}
