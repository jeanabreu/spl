import React from 'react';
import {
  Dimensions,
  StyleSheet,
  Platform,
  Image,
  TouchableOpacity
} from 'react-native';

// galio components
import {
  Text, Button, Block, NavBar, Icon
} from 'galio-framework';
import theme from '../theme';

const { height } = Dimensions.get('window');
const orderConfirmedImage = require('../../assets/order_confirmed.png');

class OrderConfirmed extends React.Component {
  render() {
    const { navigation } = this.props;
    return (
      <Block safe flex>
        <NavBar
          title="Datos del Cierre del Dia"
          left={(
            <TouchableOpacity onPress={() => navigation.openDrawer()}>
              <Icon 
                name="menu"
                family="feather"
                size={theme.SIZES.BASE}
                color={theme.COLORS.ICON}
              />
            </TouchableOpacity>
          )}
          style={Platform.OS === 'android' ? { marginTop: theme.SIZES.BASE } : null}
        />
        <Block flex center space="around" style={styles.container}>
          <Block center flex={2}>
            <Block center style={{ marginBottom: theme.SIZES.BASE * 1 }}>
              <Image
                source={orderConfirmedImage}
                style={{ marginBottom: theme.SIZES.BASE * 1.2 }}
              />
              <Text h5 color={theme.COLORS.BLACK}>
                Detalles del Cierre
              </Text>
            </Block>
            <Text muted center size={theme.SIZES.FONT * 1} style={styles.alignleft}>
                <Text style={styles.blond}>Total de Clientes:</Text> 0
             </Text> 
             <Text muted center size={theme.SIZES.FONT * 1} style={styles.alignleft}>
                <Text style={styles.blond}>Efectividad de Visitas: </Text> 0% (0/0)
             </Text> 
             <Text muted center size={theme.SIZES.FONT * 1} style={styles.alignleft}>
                <Text style={styles.blond}>Efectividad de Ventas: </Text> 0% (0/0)
             </Text>
             <Text muted center size={theme.SIZES.FONT * 1} style={styles.alignleft}>
                <Text style={styles.blond}>Abstención de Ventas: </Text> 0% (0/0)
             </Text>
             <Text muted center size={theme.SIZES.FONT * 1} style={styles.alignleft}>
                <Text style={styles.blond}>Efectividad General de Ventas: </Text> 0% (0/0)
             </Text>
             <Text muted center size={theme.SIZES.FONT * 1} style={styles.alignleft}>
                <Text style={styles.blond}>Total en Ventas: </Text> RD$ 0,000.00
             </Text> 
             <Text muted center size={theme.SIZES.FONT * 1} style={styles.alignleft}>
                <Text style={styles.blond}>Total de Unidades: </Text> 0
             </Text>
             <Text muted center size={theme.SIZES.FONT * 0.80} style={{ marginTop: theme.SIZES.BASE * 2.3 }}></Text>
                      
          </Block>
          <Block>
            <Text muted center size={theme.SIZES.FONT * 0.80} style={{ marginTop: theme.SIZES.BASE * 2.3 }}></Text>
              <Button size="large" color="info" round onPress={() => navigation.openDrawer()}>
                Confirmar cierre de dia
              </Button>
            <Text muted center size={theme.SIZES.FONT * 0.80} style={{ paddingHorizontal: theme.SIZES.BASE * 2.3 }}></Text>
              <Button size="large" color="error" round onPress={() => navigation.openDrawer()}>
                Cancelar
              </Button>
          </Block>
        </Block>
      </Block>
    )
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

export default OrderConfirmed;
