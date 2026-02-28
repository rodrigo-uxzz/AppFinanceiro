import { StatusBar } from "expo-status-bar";
import { Text, View, TextInput, Image, Pressable, Modal } from "react-native";
import { useNavigation } from "@react-navigation/native";
import styles from "./style";
import { ScrollView } from "react-native-web";
import { useState } from "react";
import * as Animatable from "react-native-animatable";


export default function App() {
  const [modalVisible1, setModalVisible1] = useState(false);
  const [modalVisible2, setModalVisible2] = useState(false);
  const Navigation = useNavigation();
  const [tituloAdicionado, setTituloAdicionado] = useState("");
  const [dataAdicionada, setDataAdicionada] = useState("");
  const [valorAdicionado, setValorAdicionado] = useState("");
  const [valorTotal, setValorTotal] = useState(0);
  const [alteracao, setAlteracao] = useState(false);
  const [motivo, setMotivo] = useState("");

  const addValor = () => {
    if (alteracao === true) {
      const valorNumerico = parseFloat(valorAdicionado) || 0;
      parseFloat(setValorTotal(valorTotal + valorNumerico));
      
    } else {
      const valorNumerico = parseFloat(valorAdicionado || 0);
      parseFloat(setValorTotal(valorTotal - valorNumerico));
      
    }

    setTituloAdicionado("");
    setDataAdicionada("");
    setValorAdicionado("");
  };



  const totalFormatado = valorTotal.toFixed(2).replace(".", ",");

  return (
    <Animatable.View 
      style={styles.container}
      animation="bounceInRight"
      duration={200}
    >

      {/* Modal do meu alterações */}
      <Modal style={styles.addLucro} 
      transparent={false}
      animationType="slide" 
      visible={modalVisible1}>
        <View style={styles.modalV1}>
          <Pressable
            onPress={() => setModalVisible1(false)}
            style={({ pressed }) => [
              styles.iconsTop,
              pressed && styles.iconsPressTop,
            ]}
          >
            <Image
              source={require("../../../assets/seta.png")}
              style={styles.setaimg}
            />
          </Pressable>
          <Text style={styles.textModalV1}>Meu Porquinho</Text>
        </View>
        <View style={styles.modalV2}>
          <Image
            source={require("../../../assets/porquinhoInter.webp")}
            style={styles.imgModalV2}
          />
          <Text style={styles.textModalV2}>Informe o valor à {motivo}</Text>
        </View>

        <View style={styles.modalV3}>
          <TextInput
            style={styles.inputModalV3}
            placeholder="Digite o valor"
            value={valorAdicionado}
            onChangeText={(text) => setValorAdicionado(text)}
            keyboardType="numeric"
            selectionColor="transparent"
            cursorColor="#FF7A00"
          />
          <TextInput
            style={styles.inputModalV3}
            placeholder="Digite o titulo"
            value={tituloAdicionado}
            onChangeText={(text) => setTituloAdicionado(text)}
            selectionColor="transparent"
            cursorColor="#FF7A00"
          />
          <TextInput
            style={styles.inputModalV3}
            placeholder="Digite a data"
            value={dataAdicionada}
            onChangeText={(text) => setDataAdicionada(text)}
            selectionColor="transparent"
            cursorColor="#FF7A00"
          />
        </View>

        <View style={styles.modalV4}>
          <Pressable
            style={({ pressed }) => [
              styles.batom3,
              pressed && styles.batomPress2,
            ]}
            onPress={() => {
              setModalVisible1(false);
              addValor();
            }}
          >
            <Text style={styles.texto1}>Adicionar</Text>
          </Pressable>
        </View>
      </Modal>
      {/* fim modal alterações */}


      <Modal
        visible={modalVisible2}
        transparent={false}
        animationType="slide"
      >
        <Pressable
          onPress={() => setModalVisible2(false)}
          style={({ pressed }) => [
            styles.iconsTop,
            pressed && styles.iconsPressTop,
          ]}
        >
          <Image
            source={require("../../../assets/seta.png")}
            style={styles.setaimg}
          />
        </Pressable>
      </Modal>


      {/* tela principal */}
      <View style={styles.v1}>
        <Pressable onPress={() => Navigation.navigate("Login")}>
          <Image
            source={require("../../../assets/topdms.jpeg")}
            style={styles.imgV1}
          />
        </Pressable>
      </View>

      {/* barra de pesquisa */}
      <View style={styles.v2}>
        <TextInput
          style={styles.pesquisa}
          placeholder="Pergunte ou pesquise"
        ></TextInput>
      </View>

      {/* saldo da conta */}
      <View style={styles.v2p1}>
        <Text style={styles.saldo}>Saldo</Text>
        <Text style={styles.saldo1}>R$ {totalFormatado}</Text>
      </View>

      {/* botoes decoração */}
      <View style={styles.v2p2}>
        <Pressable
          style={({ pressed }) => [
            styles.batom2,
            pressed && styles.batomPress2,
          ]}
          onPress={() => setValorTotal(0)}
        >
          <Text style={styles.texto2}>Pix</Text>
        </Pressable>

        <Pressable
          style={({ pressed }) => [
            styles.batom2,
            pressed && styles.batomPress2,
          ]}
        >
          <Text style={styles.texto2}>Pagar</Text>
        </Pressable>

        <Pressable
          style={({ pressed }) => [
            styles.batom2,
            pressed && styles.batomPress2,
          ]}
        >
          <Text style={styles.texto2}>Cartões</Text>
        </Pressable>
      </View>

      {/* botões menu */}
      <View style={styles.v3}>
        <Pressable
          style={({ pressed }) => [styles.botoes, pressed && styles.botPress1]}
          onPress={() => {
            setModalVisible1(true);
            setAlteracao(true);
            setMotivo("adicionar");
          }}
        >
          <Image
            style={{
              width: 30,
              height: 30,
              justifyContent: "flex-start",
              alignItems: "flex-start",
            }}
            source={require("../../../assets/cofri.png")}
          />
          <Text style={styles.textBotoes}>Meu Por...</Text>
        </Pressable>

        <Pressable
          style={({ pressed }) => [styles.botoes, pressed && styles.botPress1]}
          onPress={() => {
            setModalVisible1(true);
            setAlteracao(false);
            setMotivo("retirar");
          }}
        >
          <Image
            style={styles.imgBotoes}
            source={require("../../../assets/recarga.png")}
          />
          <Text style={styles.textBotoes}>Retiradas</Text>
        </Pressable>

        <Pressable
          style={({ pressed }) => [styles.botoes, pressed && styles.botPress1]}
          onPress={() => setModalVisible2(true)}
        >
          <Image
            style={styles.imgBotoes}
            source={require("../../../assets/moeda.png")}
          />
          <Text style={styles.textBotoes}>Moviment...</Text>
        </Pressable>
      </View>

      <View style={styles.v4}>

      </View>

      <StatusBar style="auto" />
    </Animatable.View>
  );
}
