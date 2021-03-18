import React, {Component} from 'react';
import {View, StyleSheet, Text, ScrollView} from 'react-native';

import {Picker} from '@react-native-picker/picker';

export default class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      camisa: 0,
      camisas: [
        {key: 1, nome:'Marca A', valor: 14.90},
        {key: 2, nome:'Marca B', valor: 19.90},
        {key: 3, nome:'Marca C', valor: 24.90},
        {key: 4, nome:'Marca D', valor: 29.90},
        {key: 5, nome:'Marca E', valor: 34.90},
        {key: 6, nome:'Nenhuma', valor: 0},
      ],

      camiseta: 0,
      camisetas: [
        {key: 1, nome:'Marca A', valor: 9.90},
        {key: 2, nome:'Marca B', valor: 13.90},
        {key: 3, nome:'Marca C', valor: 16.90},
        {key: 4, nome:'Marca D', valor: 19.90},
        {key: 5, nome:'Marca E', valor: 22.90},
        {key: 6, nome:'Nenhuma', valor: 0},
      ],

      calca: 0,
      calcas: [
        {key: 1, nome:'Marca A', valor: 49.90},
        {key: 2, nome:'Marca B', valor: 69.90},
        {key: 3, nome:'Marca C', valor: 89.90},
        {key: 4, nome:'Marca D', valor: 109.90},
        {key: 5, nome:'Marca E', valor: 119.90},
        {key: 6, nome:'Nenhuma', valor: 0},
      ],

      bermuda: 0,
      bermudas: [
        {key: 1, nome:'Marca A', valor: 39.90},
        {key: 2, nome:'Marca B', valor: 49.90},
        {key: 3, nome:'Marca C', valor: 59.90},
        {key: 4, nome:'Marca D', valor: 69.90},
        {key: 5, nome:'Marca E', valor: 79.90},
        {key: 6, nome:'Nenhuma', valor: 0},
      ],
      
    }
  }


render(){

  let camisasItem = this.state.camisas.map( (v, k) => {
    return <Picker.Item  key={k} value={k} label={v.nome}/>
  })

  let camisetasItem = this.state.camisetas.map( (v, k) => {
    return <Picker.Item  key={k} value={k} label={v.nome}/>
  })

  let calcasItem = this.state.calcas.map( (v, k) => {
    return <Picker.Item  key={k} value={k} label={v.nome}/>
  })

  let bermudasItem = this.state.bermudas.map( (v, k) => {
    return <Picker.Item  key={k} value={k} label={v.nome}/>
  })

  let somaValores = (
    this.state.camisas[this.state.camisa].valor + 
    this.state.camisetas[this.state.camiseta].valor +
    this.state.calcas[this.state.calca].valor + 
    this.state.bermudas[this.state.bermuda].valor
    ).toFixed(2)
  
    return(
      <View style={styles.container}> 
      <ScrollView alwaysBouncevertical={false}>
        <Text style={styles.logo}>Menu Loja</Text>

        <View style={styles.caixa}>
          <Text style={styles.textoSessao}>Camisas:</Text>
          <Picker
            selectedValue={this.state.camisa}
            onValueChange={ (itemValue, itemIndex) => this.setState({camisa:itemValue})}
          >
            {camisasItem}
          </Picker>

          <Text style={styles.textoPreco}>R$ {this.state.camisas[this.state.camisa].valor.toFixed(2)}</Text>
        </View>

        <View style={styles.caixa}>
          <Text style={styles.textoSessao}>Camisetas:</Text>
          <Picker
            selectedValue={this.state.camiseta}
            onValueChange={ (itemValue, itemIndex) => this.setState({camiseta:itemValue})}
          >
            {camisetasItem}
          </Picker>

          <Text style={styles.textoPreco}>R$ {this.state.camisetas[this.state.camiseta].valor.toFixed(2)}</Text>
        </View>

        <View style={styles.caixa}>
          <Text style={styles.textoSessao}>Calças:</Text>
          <Picker
            selectedValue={this.state.calca}
            onValueChange={ (itemValue, itemIndex) => this.setState({calca:itemValue})}
          >
            {calcasItem}
          </Picker>

          <Text style={styles.textoPreco}>R$ {this.state.calcas[this.state.calca].valor.toFixed(2)}</Text>
        </View>

        <View style={styles.caixa}>
          <Text style={styles.textoSessao}>Bermudas:</Text>
          <Picker
            selectedValue={this.state.bermuda}
            onValueChange={ (itemValue, itemIndex) => this.setState({bermuda:itemValue})}
          >
            {bermudasItem}
          </Picker>

          <Text style={styles.textoPreco}>R$ {this.state.bermudas[this.state.bermuda].valor.toFixed(2)}</Text>
        </View>

        <View style={styles.caixaValor} >
          <Text style={styles.textoTotal}>Total</Text>
          <Text style={styles.TextoTotalValor}>R$ {somaValores}</Text>
        </View>

      </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'#fb9e3a',
  },
  logo:{
    textAlign:'center',
    fontSize:28,
    fontWeight:'bold',
    marginTop: 15
  },
  caixa:{
    marginTop: 10,
    backgroundColor: '#f3eae8',
    marginLeft: 15,
    marginRight: 15,
    borderWidth:2,
    borderRadius:10,
  },
  textoSessao:{
    padding:5,
    fontSize: 20,
    fontWeight:'bold'
  },
  textoPreco:{
    padding:5,
    fontSize: 17,
    fontWeight:'bold',
    marginLeft:230,
    fontStyle:'italic'
  },

  caixaValor:{
    marginTop: 10,
    backgroundColor: '#f3eae8',
    marginLeft: 15,
    marginRight: 15,
    borderWidth:2,
    borderRadius:10,
    flexDirection:'row'
  },
  textoTotal:{
    fontSize:20,
    padding:5,
    fontWeight:'bold',
    fontStyle:'italic'
  },

  TextoTotalValor:{
    fontSize:20,
    padding:5,
    fontWeight:'bold',
    fontStyle:'italic',
    marginLeft:170,
  }
});