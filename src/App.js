import React , { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';

import Routes from './Routes'
import reducers from './reducers'


class App extends Component { 
  componentWillMount(){
    // initialize Firebase
    let config = {
      apiKey: "AIzaSyCbon12DE8ykyiic9g7-ILql8sem3skLzw",
      authDomain: "whatsapp-clone-a0c5e.firebaseapp.com",
      databaseURL: "https://whatsapp-clone-a0c5e.firebaseio.com",
      projectId: "whatsapp-clone-a0c5e",
      storageBucket: "whatsapp-clone-a0c5e.appspot.com",
      messagingSenderId: "1060795500656"
    };
    firebase.initializeApp(config);
  } 
  render(){
    return ( 
      <Provider store={createStore(reducers, {}, applyMiddleware(ReduxThunk))} >
        <Routes />
      </Provider>
    );
  }
}

export default App;