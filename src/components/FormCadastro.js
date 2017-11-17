import React, { Component } from 'react';
import { View, TextInput, Button, StyleSheet, Image, Text, ActivityIndicator } from 'react-native';
import { connect} from 'react-redux';
import { 
    modificaEmail, 
    modificaSenha, 
    modificaNome, 
    cadastraUsuario 
} from '../actions/AutenticacaoActions';

class formCadastro extends Component {

    _cadastraUsuario() {

        const { nome, email, senha } = this.props 

        this.props.cadastraUsuario({ nome, email, senha });
    }

    renderBtnCadastrar() {
        if (this.props.loading_cadastro) {
            return (
                <ActivityIndicator size="large" color="#fff" />
            )
        }
        return (
            <Button
                style={styles.botao}
                color="#115E54"
                title="Cadastrar"
                onPress={() => this._cadastraUsuario()}
            />
        );
    }

    render() {
        return (
            <Image style={{ flex: 1, width: null }} source={require('../imgs/bg.png')} >
                <View style={styles.container}>
                    <View style={ styles.divFormCadastro }>
                    <TextInput 
                        value={this.props.nome} 
                        style={styles.txtInput} 
                        placeholder="Nome" 
                        placeholderTextColor='#fff'
                         onChangeText={texto => this.props.modificaNome(texto)} 
                    />
                    <TextInput 
                        value={this.props.email} 
                        style={styles.txtInput} 
                        placeholder="E-mail" 
                        placeholderTextColor='#fff' 
                        onChangeText={ texto => this.props.modificaEmail(texto)} 
                    />
                    <TextInput 
                        secureTextEntry 
                        value={this.props.senha} 
                        style={styles.txtInput} 
                        placeholder="Senha" 
                        placeholderTextColor='#fff' 
                        onChangeText={texto => this.props.modificaSenha(texto)} 
                    />
                    <Text style={{fontSize: 18, color:'red', backgroundColor:'transparent'}}>{this.props.erroCadastro}</Text>
                    </View>
                    
                    <View style={styles.divbotao}>
                        {this.renderBtnCadastrar()}
                    </View>
                </View>
            </Image>    
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10
    },
    divFormCadastro: {
        flex: 1,
        justifyContent: 'center'
    },
    txtInput: {
        fontSize: 20,
        height: 45
    },
    divbotao: {
        flex: 1,
    },
    botao: {

    }


})

const mapStateToProps = state => (
    {   
        nome: state.AutenticacaoReducer.nome,
        email: state.AutenticacaoReducer.email,
        senha: state.AutenticacaoReducer.senha,
        erroCadastro: state.AutenticacaoReducer.erroCadastro,
        loading_cadastro: state.AutenticacaoReducer.loading_cadastro,
    }
)
export default connect(
        mapStateToProps, 
        { 
            modificaEmail,
            modificaSenha, 
            modificaNome, 
            cadastraUsuario
        }
    )(formCadastro)

