import React from 'react';
import { View, Text, Image, Button } from 'react-native';
import { Actions } from 'react-native-router-flux';

export default props => (
    <Image style={{ flex: 1, width: null }} source={require('../imgs/bg.png')} >
        <View style={{ flex: 1, padding: 15 }}>
            <View style={{ flex: 2, justifyContent: 'center', alignItems: 'center' }}>
                <Text style={{backgroundColor: 'transparent', color: '#fff', marginBottom:10, fontSize: 20,}}>Seja Bem-Vindo</Text>
                <Image source={ require('../imgs/logo.png')} />
            </View>
            <View style={{ flex: 1 }}>
                <Button title="Fazer Login" color="#115E54" onPress={() => Actions.login() } />
            </View>
        </View>
    </Image>
);