import React from 'react';
import PropTypes from 'prop-types';


import Constants from 'expo-constants';
//import { SwipeListView } from 'react-native-swipe-list-view';
import PostsList from './PostsList';
import firebase from 'firebase';

import {
  Dimensions,
  StyleSheet,
  Platform,
  StatusBar,
  Image,
  View,
  TouchableOpacity
} from 'react-native';

// galio components
import {
  Text, Button, Block, NavBar, Icon
} from 'galio-framework';
import theme from '../theme';

const { height } = Dimensions.get('window');
const orderConfirmedImage = require('../../assets/order_confirmed.png');

class Clientesdeldia extends React.Component {
  componentWillMount() 
  {
    

    //firebase.initializeApp(firebaseConfig);
    
    firebase.database().ref('ult_conexion/1').set(
          {
            empresa: 'EMPRESA SRL',
            telefono: '8093330000',
            contacto: 'Junior Abreu',
          },

        ).then(() => {
          console.log('Usuario esta consultando itinerario!');
        })
        .catch((error) => {
              console.log(error);
    });
        firebase.database().ref('clientes/1/cliente_nombre').once('value', function (snapshot) {
            console.log(snapshot.val())
        });
        

    }  

    render() {
        return (
          <View style={{ flex: 1 }}>
                <Text muted center size={theme.SIZES.FONT * 1.575} style={{ marginTop: theme.SIZES.BASE * 4.3 }}>
                 Detalle del Pedido
                </Text>
          </View>
      );
  } 
}
  

const styles = StyleSheet.create({
  container: {
    paddingTop: theme.SIZES.BASE * 0.3,
    paddingHorizontal: theme.SIZES.BASE,
    backgroundColor: theme.COLORS.WHITE,
    marginTop: theme.SIZES.BASE * 1.875,
    marginBottom: height * 0.1
  },
  texto: {
    backgroundColor: theme.COLORS.WHITE,
    fontWeight: 'bold',
  },
  alignleft: {
    textAlign: 'left', 
    alignSelf: 'stretch'
  },
  blond: {
    fontWeight: 'bold',
  },
});

export default Clientesdeldia;
