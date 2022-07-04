import React, { Component } from 'react';
import {
    Text,
    TouchableOpacity,
    StyleSheet,
    View
} from 'react-native';

export default class Tela_Pos_Voto extends Component {
    render(){
        return(
            <View style={styles.container}>
                <Text style={styles.texts}>Muito Obrigado pelo seu voto. </Text>
                <TouchableOpacity>
                     style={styles.button}
                     onPress={()=> this.props.navigation.navigate('HomeScreen')}
                <Text>Voltar para Tela de Votação</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 100
    },
    texts:{
        fontSize: 20
    },
    button:{
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 2,
        borderRadius: 15,
        backgroundColor:"green",
        margin: 10,
        width: 200,
        height: 50,
    }
})
