import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';

export default class AppHeader extends React.Component{
  render(){
    return(
      <View style= {styles.textContainer}>
        <Text style={styles.text}>VOTAÇÃO DA EQUIPE</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  textContainer:{
    backgroundColor: '#35a3c4'
  },
  text:{
    padding: 20,
    fontSize: 22,
    color: '#093542',
    fontWeight: 'bold',
    textAlign: 'center',
    fontFamily: 'cursive'
  }
});