import React, { Component } from 'react';
import { View, Text, TextInput, Button, StyleSheet, TouchableOpacity, Image, ActivityIndicator } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import { modificaEmail, modificaSenha, autenticarUsuario } from '../actions/AutenticacaoActions'

class formLogin extends Component {

    _autenticarUsuario() {
        const { email, senha } = this.props;
        this.props.autenticarUsuario({email, senha});
    }
    renderBtnAcessar() {
        if (this.props.loading_login) {
            return(
                <ActivityIndicator size="large" color="#fff" />
            )
        }
        return (
            <Button
                style={styles.botao}
                color='#115e54'
                title="Acessar"
                onPress={() => this._autenticarUsuario()} />
        );
    }

    render() {
        return (
            <Image style={{flex: 1, width: null}} source={require('../imgs/bg.png')} >
                <View style={styles.container}>
                    <View style={styles.divTitulo}> 
                        <Text style={styles.titulo}>Whatsapp Clone</Text>
                    </View>
                    <View style={styles.divFormLogin}>
                        <TextInput 
                            value={this.props.email} 
                            style={styles.txtInput} 
                            placeholder='E-mail' 
                            placeholderTextColor='#fff' 
                            onChangeText={texto => this.props.modificaEmail(texto) } 
                        />
                        <TextInput 
                            secureTextEntry 
                            value={this.props.senha} 
                            style={styles.txtInput} 
                            placeholder='Senha' 
                            placeholderTextColor='#fff' 
                            onChangeText={texto => this.props.modificaSenha(texto)} 
                        />
                        <TouchableOpacity onPress={() => Actions.cadastro()}>
                            <Text style={styles.txtForm}>Ainda não tem cadastro? Cadastre-se</Text>
                        </TouchableOpacity>
                        <Text style={styles.txtErro}>{this.props.erroLogin}</Text>
                    </View>
                    <View style={styles.divBotao}>
                       {this.renderBtnAcessar()}
                    </View>
                </View>
            </Image>
        );
    }
}
const styles = StyleSheet.create({

    container: {
        flex: 1,
        padding: 10,
    },
    divTitulo: {
        flex:1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    titulo: {
        fontSize: 25,
        backgroundColor: 'transparent',
        color: '#fff'
    },
    divFormLogin: {
        flex: 2
    },
    txtInput: {
        fontSize: 20,
        height: 45,
    },
    txtForm: {
        fontSize: 20,
        backgroundColor: 'transparent',
        color: '#fff'
    },
    divBotao: {
        flex: 2
    },
    txtErro: {
        fontSize: 16, 
        color: 'red', 
        backgroundColor: 'transparent',
        marginTop: 10, 
        textAlign: 'center' 
    }
});

const mapStateToProps = state => (
    {
        email: state.AutenticacaoReducer.email,
        senha: state.AutenticacaoReducer.senha,
        erroLogin: state.AutenticacaoReducer.erroLogin,
        loading_login: state.AutenticacaoReducer.loading_login
    }
);

export default connect(mapStateToProps, { modificaEmail, modificaSenha, autenticarUsuario })(formLogin);