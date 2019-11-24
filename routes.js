import React from 'react';
import PropTypes from 'prop-types';
import {
  Image, StyleSheet, ScrollView, SafeAreaView, Platform,
} from 'react-native';
import {
  createDrawerNavigator,
  DrawerItems,
} from 'react-navigation';

// screens
import Article from './src/screens/Article';
import ArticleCover from './src/screens/ArticleCover';
import Cards from './src/screens/Cards';
import Components from './src/screens/Components';
import Login from './src/screens/Login';
import EstadodePedido from './src/screens/EstadodePedido';
import Clientesdeldia from './src/screens/Clientesdeldia';
import Pedidos from './src/screens/Pedidos';
import Configuracion from './src/screens/Configuracion';
import OrderConfirmed from './src/screens/OrderConfirmed';
import Presentation from './src/screens/Presentation';
import Dashboard from './src/screens/Dashboard';
import Register from './src/screens/Register';
import Registerv2 from './src/screens/Registerv2';
import Grid from './src/screens/Grid';
import Sincronizar from './src/screens/Sincronizar';


import theme from './src/theme';
import { Block, Icon, Text } from 'galio-framework';

const GalioDrawer = props => (
  <SafeAreaView style={styles.drawer} forceInset={{ top: 'always', horizontal: 'never' }}>
    <Block space="between" row style={styles.header}>
      <Block flex={0.3}><Image source={{ uri: 'https://cdn2.iconfinder.com/data/icons/circle-icons-1/64/gas-128.png' }} style={styles.avatar} /></Block>
      <Block flex style={styles.middle}>
        <Text size={theme.SIZES.FONT * 0.875}>SPL v1.0</Text>
        <Text muted size={theme.SIZES.FONT * 0.875}>Sistema de Preventa de Lubricantes</Text>
      </Block>
    </Block>
    <ScrollView>
      <DrawerItems {...props} />
    </ScrollView>
  </SafeAreaView>
);

const styles = StyleSheet.create({
  drawer: {
    flex: 1,
  },
  header: {
    paddingHorizontal: theme.SIZES.BASE,
    paddingTop: theme.SIZES.BASE * 0.6875,
    paddingBottom: theme.SIZES.BASE * 1.6875,
    borderBottomColor: '#D8D8D8',
    borderBottomWidth: 0.5,
    marginTop: Platform.OS === 'android' ? theme.SIZES.BASE * 2 : null,
  },
  avatar: {
    width: theme.SIZES.BASE * 2.5,
    height: theme.SIZES.BASE * 2.5,
    borderRadius: theme.SIZES.BASE * 1.25,
  },
  middle: {
    justifyContent: 'center',
  },
});

const MenuIcon = ({ name, family, focused }) => (
  <Icon
    name={name}
    family={family}
    size={theme.SIZES.FONT}
    color={focused ? theme.COLORS.WHITE : '#5D5D5D'}
  />
);

MenuIcon.defaultProps = {
  name: null,
  family: null,
  focused: false,
};

MenuIcon.propTypes = {
  name: PropTypes.string,
  family: PropTypes.string,
  focused: PropTypes.bool,
};

const screens = {
  Login: {
    screen: Login,
    navigationOptions: {
      drawerLabel: 'Acceso a Usuario',
      drawerIcon: props => <MenuIcon name="user-circle" family="font-awesome" focused={props.focused} />,
    },
  },
  Clientesdeldia: {
    screen: Clientesdeldia,
    navigationOptions: {
      drawerLabel: 'Itinerio de Visita',
      drawerIcon: props => <MenuIcon name="user-circle" family="font-awesome" focused={props.focused} />,
    },
  },
  
  Article: {
    screen: Article,
    navigationOptions: {
      drawerLabel: 'Productos',
      drawerIcon: props => <MenuIcon name="dropbox" family="font-awesome" focused={props.focused} />,
    },
  },
  Pedidos: {
    screen: Pedidos,
    navigationOptions: {
      drawerLabel: 'Pedidos',
      drawerIcon: props => <MenuIcon name="calendar-minus-o" family="font-awesome" focused={props.focused} />,
    },
  },
  EstadodePedido: {
    screen: EstadodePedido,
    navigationOptions: {
      drawerLabel: 'Estado de Pedidos',
      drawerIcon: props => <MenuIcon name="shopping-cart" family="font-awesome" focused={props.focused} />,
    },
  },

  Configuracion: {
    screen: Configuracion,
    navigationOptions: {
      drawerLabel: 'Configuración',
      drawerIcon: props => <MenuIcon name="gears" family="font-awesome" focused={props.focused} />,
    },
  },
  OrderConfirmed: {
    screen: OrderConfirmed,
    navigationOptions: {
      drawerLabel: 'Cierre del Dia',
      drawerIcon: props => <MenuIcon name="hourglass-end" family="font-awesome" focused={props.focused} />,
    },
  },
  Sincronizar: {
    screen: Sincronizar,
    navigationOptions: {
      drawerLabel: 'Sincronizar Datos',
      drawerIcon: props => <MenuIcon name="rotate-right" family="font-awesome" focused={props.focused} />,
    },
  },
};


const options = {
  contentComponent: props => <GalioDrawer {...props} />,
  contentOptions: {
    labelStyle: {
      fontWeight: '500',
      color: theme.COLORS.GREY,
      fontSize: theme.SIZES.FONT * 0.875,
      marginLeft: theme.SIZES.BASE * 0.75,
    },
    activeLabelStyle: {
      color: theme.COLORS.WHITE,
    },
    activeBackgroundColor: theme.COLORS.THEME,
    itemsContainerStyle: {
      paddingVertical: 0,
    },
    iconContainerStyle: {
      marginHorizontal: 0,
      marginLeft: theme.SIZES.BASE * 1.65,
      // marginRight: theme.SIZES.BASE * 0.76,
    },
  },
};

const GalioApp = createDrawerNavigator(screens, options);

export default GalioApp;
