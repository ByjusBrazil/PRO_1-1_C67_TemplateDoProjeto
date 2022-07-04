import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import Constants from 'expo-constants';


// Você pode importar de arquivos locais
import HomeScreen from './screens/HomeScreen';
import Tela_Pos_Voto from './screens/TelaPosVoto';

export default class App extends React.Component {
  render() {
    return (
      <View>
        <AppContainer/>
      </View>
    );
  }
}

var AppNavigator = createSwitchNavigator({
  HomeScreen: HomeScreen,
  TelaPosVoto: Tela_Pos_Voto
});

const AppContainer = createAppContainer(AppNavigator);
