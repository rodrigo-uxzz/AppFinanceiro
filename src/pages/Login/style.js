import { StyleSheet } from "react-native";


export default StyleSheet.create({
container:{
    flex:1,
    backgroundColor: "#161616",
},
v1:{
    flex:0.20,
    justifyContent: "flex-start",
    alignItems: "flex-end",
},

v2:{
    flex:1,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 200,
},

//imagens inter
iconsTop:{
    width: 120, 
    height: 35,
    resizeMode: "contain",
    marginTop: 20,
},

logoSplash:{
    width: 150, 
    height: 100,
    resizeMode: "contain",
    marginBottom: 15,
},

//parte do login

login:{
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

// botoes de entrar e esqueci

v2:{
    flex:0.50,
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


batom2:{
    backgroundColor: "#FF7A0030",
    width: 330,
    height: 50,
    padding: 15,
    borderRadius: 50,
    color: "#FF7A00",
    marginBottom: 5,   
},
//efeito de clique 2
  batomPress2: {
    backgroundColor: '#fc973890', 
    opacity: 0.9,
    transform: [{ scale: 0.98 }], 
  },
    texto2: {
     color: '#FF7A00',
     fontWeight: 'bold',
     textAlign: 'center',
    },

texto3:{
    color: '#FF7A00',
    textAlign: 'center',
    textDecorationLine: 'underline',
    marginTop: 5,
},


//efeito de clique 3 no cadastre-se
  textPress3: {
    color: '#fc973890',
    textDecorationLine: 'underline',
    opacity: 0.9,
    transform: [{ scale: 0.98 }], 
  },


});