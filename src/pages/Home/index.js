import { StatusBar } from 'expo-status-bar';
import { Text, View, TextInput, Image, Pressable, Modal } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from "./style";

export default function App() {

  return (
    <View style={styles.container}>
      <View style={styles.v1}>
        <Image
          source={require('../../../assets/topdms.jpeg')}
          style={styles.imgV1}
        />

      </View>

      {/* barra de pesquisa */}
      <View style={styles.v2}>

        <TextInput
        style={styles.pesquisa}
          placeholder='Pergunte ou pesquise'
        ></TextInput>

      </View>

      {/* saldo da conta */}
      <View style={styles.v2p1}>

        <Text style={styles.saldo}>Saldo</Text>
        <Text style={styles.saldo1}>R$10,30</Text>

      </View>

      {/* botoes decoração */}
      <View style={styles.v2p2}>

        <Pressable 
          style={({pressed}) => [
            styles.batom2,
            pressed && styles.batomPress2
          ]}
          >
            <Text style={styles.texto2}>Pix</Text> 
        </Pressable>
        
        <Pressable 
          style={({pressed}) => [
            styles.batom2,
            pressed && styles.batomPress2
          ]}
          >
            <Text style={styles.texto2}>Pagar</Text> 
        </Pressable>

        <Pressable 
          style={({pressed}) => [
            styles.batom2,
            pressed && styles.batomPress2
          ]}
          >
            <Text style={styles.texto2}>Cartões</Text> 
        </Pressable>
        
      </View>

      
      {/* botões menu */}
      <View style={styles.v3}>

        <Pressable
        style={({pressed}) => [
        styles.botoes,
        pressed && styles.botPress1
        ]}
        ><Text>Oi</Text>
        </Pressable>

        <Pressable
        style={({pressed}) => [
        styles.botoes,
        pressed && styles.botPress1
        ]}
        ><Text>Oi</Text>
        </Pressable>

        <Pressable
        style={({pressed}) => [
        styles.botoes,
        pressed && styles.botPress1
        ]}
        ><Text>Oi</Text>
        </Pressable>


      </View>
      
      <View style={styles.v4}></View>
      
      <StatusBar style="auto" />
    </View>
  );
}

