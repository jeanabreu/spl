import React from 'react';
import { View, StatusBar } from 'react-native';
import firebase from 'firebase';
import GalioApp from './routes';

export default class App extends React.Component {
  componentWillMount() {
    let firebaseConfig = {
     // apiKey: 'AIzaSyD4BDqopCIHNnPATiDngU6G8kbgUSYZ7B4',
     // authDomain: 'bdspl-97222.firebaseapp.com',
     // databaseURL: 'https://bdspl-97222.firebaseio.com',
     // projectId: 'bdspl-97222',
     // storageBucket: 'bdspl-97222.appspot.com',
     // messagingSenderId: '925918335607',
     // appId: '1:925918335607:web:fa60ce7a46515a07da6c72',
     // measurementId: 'G-YZ4WYJRC62',

     //PRUEBAS FIREBASE
    apiKey: "AIzaSyA33pQ3mn3oHxfyxJF1kB7nZ7EfLQzmFiQ",
    authDomain: "pruebas-97222.firebaseapp.com",
    databaseURL: "https://pruebas-97222.firebaseio.com",
    projectId: "pruebas-97222",
    storageBucket: "pruebas-97222.appspot.com",
    messagingSenderId: "214992712814",
    appId: "1:214992712814:web:3dd467e44b16b3f6db627f",
    measurementId: "G-H6K0FZ2KWN"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    // firebase.analytics();
    // COnsulta de Estado de Conexxion
    let connectedRef = firebase.database().ref('.info/connected');
    connectedRef.on('value', (snap) => {
          if (snap.val() === true) {
            alert("Conectado con BD");
          } else {
            alert("Desconectado");
          }
        });

    firebase.database().ref('Clientes/0005').set(
      {
        empresa: 'EMPRESA SRL',
        telefono: '8093330000',
        contacto: 'Junior Abreu',
      },

    ).then(() => {
      console.log('INSERTADO!');
    })
.catch((error) => {
      console.log(error);
    });
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <StatusBar hidden={false} />
        <GalioApp />
      </View>
    );
  }
}
