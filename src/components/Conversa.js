import React, { Component } from 'react';
import { View, Text, TextInput, Image, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import { modificaMensagem, enviarMensagem } from '../actions/AppActions'

class Conversa extends Component {
    _enviarMensagem(){
        const { mensagem, contatoNome, contatoEmail } = this.props;

        this.props.enviarMensagem(mensagem, contatoNome, contatoEmail)
    }
    render() {
        return(
            <View style={{ flex: 1, backgroundColor: '#eee4dc', padding: 10}}>
                <View style={{ flex: 1,paddingBottom: 20  }}>
                    
                </View>
                <View style={{ height: 60, flexDirection: 'row' }}>
                    <TextInput 
                        onChangeText={texto => this.props.modificaMensagem(texto)}
                        value={this.props.mensagem}
                        style={{ flex: 4, backgroundColor: '#fff', fontSize: 18}} 
                        
                    />
                    <TouchableOpacity 
                        onPress={this._enviarMensagem.bind(this)} 
                        underlayColor="#fff" 
                    >
                        <Image source={require('../imgs/enviar_mensagem.png')} style={{ flex: 1 }} />
                    </TouchableOpacity>
                </View>
            </View>
        )
    }

}

mapStateToProps = state => {
    return ({
        mensagem: state.AppReducer.mensagem
    })
}
export default connect(mapStateToProps, { modificaMensagem, enviarMensagem } )(Conversa)