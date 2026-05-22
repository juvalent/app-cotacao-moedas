import { useState, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';


export default function App() {

  const[cotacao, setCotacao] = useState([]);
  

  useEffect(() =>{
    async function fazerCotacao(){
      const resposta = await fetch('https://v6.exchangerate-api.com/v6/5eb537661ae9ecc0e308c9a6/latest/USD');
      const cotacao = await resposta.json();
      setCotacao(cotacao);
    }

    fazerCotacao();
  }, []);

  return (

    <View style={styles.container}>

    <Text style={styles.titulo}>
       Cotação de Moedas
    </Text>

    <View style={styles.card}>

    <Text style={styles.moeda}>
      Dólar em Real
    </Text>

    <Text style={styles.moeda}>
    R$ {cotacao.conversion_rates?.BRL.toFixed(2)}
    </Text>

    <Text style ={styles.moeda}>
      Dólar em Euro
    </Text>

    <Text style={styles.valor}>
    € {cotacao.conversion_rates?.EUR}
    </Text>

    </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f3F4F6',
    alignItems: 'center',
    justifyContent: 'center',
    PADDING:20,
  },
  titulo: {
    fontSize: 28,
    fontWeight: 'bold',
    marginbutton:50,
    color: '#111827',
  },
card: {
    width: '100%',
    backgroundColor: '#FFFFFF',
    padding: 20,
    borderRadius: 15,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
  },

  moeda: {
    fontSize: 18,
    color: '#6B7280',
    marginBottom: 10,
  },

  valor: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#10B981',
  },

});
