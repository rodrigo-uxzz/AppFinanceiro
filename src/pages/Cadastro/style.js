import { StyleSheet } from "react-native";


export default StyleSheet.create({

container:{
    flex:1,
    backgroundColor: "#161616",
},

v1:{
    flex:0.30,
    justifyContent: "flex-start",
    alignItems: "center",
},

//botao voltar
iconsTop:{
    width: 30, 
    height: 30,
    alignSelf: "flex-start",
    textAlign: "center",
    marginLeft: 20,
    marginBottom: 20,
},
    setaimg:{
        width: 100, 
        height: 100,
        resizeMode: "contain",
        alignSelf: "center",
    },  

v2:{
    flex:1,
    justifyContent: "center",
    alignItems: "center",
},

//info cadastro
textoA:{
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 20,
    justifyContent: "flex-start",
    alignSelf: "flex-start",
    marginLeft: 20,
    marginBottom: 40,
},

textoMini:{
    color: "#fff",
    fontSize: 14,
    marginBottom: 5,
    justifyContent: "flex-start",
    alignSelf: "flex-start",
    marginLeft: 20,
},

cadastro:{
    backgroundColor: "#161616",
    width: 330,
    height: 50,
    borderRadius: 15,
    marginBottom: 10,
    padding: 10,
    borderColor: "#fff",
    borderWidth: 1.6,
    color: "#fff",
},

//parte finalizar
v3:{
    flex:0.40,
    justifyContent: "center",
    alignItems: "center",
},

batom1:{
    backgroundColor: "#FF7A00",
    width: 330,
    height: 50,
    padding: 15,
    borderRadius: 50,
    textAlign: "center",
    color: "#fff",
    marginTop: 20,
    marginBottom: 8,
},

//efeito de clique 1
  batomPress1: {
    opacity: 0.9,
    transform: [{ scale: 0.98 }], 
  },
     texto1: {
      color: '#FFF',
      fontWeight: 'bold',
      textAlign: 'center',
    },
})