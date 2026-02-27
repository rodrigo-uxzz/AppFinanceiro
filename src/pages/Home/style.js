import { StyleSheet } from "react-native";


export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#161616",
  },
  
  v1:{
    flex: 0.10,
    alignItems: 'center',
    justifyContent: 'center',
  },

  imgV1:{
    width: 360,
    height: 200,
    resizeMode: 'contain',
  },

  v2:{
    flex: 0.20,
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'right',
    marginTop: 10,
    marginBottom: 10,
  },
  
  pesquisa:{
    backgroundColor: "#161616",
    width: 330,
    height: 50,
    borderRadius: 50,
    padding: 20,
    borderColor: "#fff",
    borderWidth: 1.6,
    color: "#fff",
  },

  v2p1:{
    marginLeft: 15,
  },

  saldo:{
    color: '#FFF',
    fontSize: 18,
  },

  saldo1:{
    fontWeight:"bold",
    color: '#FFF',
    fontSize: 25,
  },

  v2p2:{
    flexDirection: 'row',
    marginLeft: 10,
  },

  batom2:{
    backgroundColor: "#FF7A0030",
    height: 30,
    padding: 15,
    borderRadius: 50,
    color: "#FF7A00",
    marginLeft: 5,
    marginBottom: 5, 
    marginTop: 10,  
    justifyContent: 'center',
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

  v3:{
    flex: 0.40,
    alignItems: 'center',
    justifyContent: 'space-evenly',
    flexDirection: 'row',
  },

  botoes:{
    width: 100,
    height: 100,
    backgroundColor:'#212121',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    borderRadius: 15,
    padding: 15,
    flexDirection: 'column',
  },

  botPress1:{
    opacity: 0.9,
    transform: [{ scale: 0.98 }], 
  },

  imgBotoes:{
    width: 30,
    height: 30,
    justifyContent: 'flex-start', 
    alignItems: 'flex-start',
  },

  textBotoes:{
    color: '#FFF',
    fontWeight: 'bold',
    fontSize: 13,
  },

   v4:{
    flex: 1,
    alignContent: 'center',
    justifyContent: 'center',
  },


});