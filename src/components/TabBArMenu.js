import React from 'react';
import { View, Text, StatusBar, Image, TouchableOpacity } from 'react-native';
import { TabBar } from 'react-native-tab-view';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import { habilitaInclusaoContato } from '../actions/AppActions';

const TabMenu =  props => (
    <View style={{ backgroundColor: "#115E54", elevation: 4, marginBottom:6 }} >

        <StatusBar backgroundColor="#114D44" hidden/>

        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }} >

            <View style={{height: 60, justifyContent: 'center' }} >
                <Text style={{fontSize: 20, color: '#fff', marginLeft: 20}}>Whatsapp Clone</Text>
            </View>

            <View style={{flexDirection: 'row', marginRight: 20, alignItems:'center' }} >

                <View style={{ width: 50, alignItems: 'center' }}>
                    <TouchableOpacity 
                        onPress={() => { Actions.adicionarContato(); props.habilitaInclusaoContato()}  } 
                    >
                        <Image source={require('../imgs/adicionar-contato.png')} />
                    </TouchableOpacity>
                </View>
                <View>
                    <Text style={{fontSize: 20, color: '#fff'}} >Sair</Text>
                </View>
            </View>
        </View>

        <TabBar { ...props } style={{backgroundColor: '#115e54', elevation: 0}} />
    </View>
);

export default connect(null, { habilitaInclusaoContato })(TabMenu)