import React from 'react';
import {
  Alert, Dimensions, KeyboardAvoidingView, StyleSheet, Platform,
} from 'react-native';
//import Dropdown from 'react-dropdown';
//import 'react-dropdown/style.css'

// galio component
import {
  Block, Button, Input, NavBar, Text,
} from 'galio-framework';
//import ModalDropdown from 'react-native-modal-dropdown';
import { Dropdown } from 'react-native-material-dropdown';
//import InputCode from 'react-native-input-code';



import theme from '../theme';



const { height, width } = Dimensions.get('window');
//const defaultOption = options[0];


class Login extends React.Component {
  state = {
    email: '-',
    password: '-',
  }

  handleChange = (name, value) => {
    this.setState({ [name]: value });
  }

  render() {
    const { navigation } = this.props;
    const { email, password } = this.state;
    let data1 = [{
      value: 'RUTA 1',
    }, {
      value: 'RUTA 2',
    }, {
      value: 'RUTA 3',
    }];

    return (
      <Block safe flex style={{ backgroundColor: theme.COLORS.WHITE }}>
        <NavBar
          title="LOGIN"
          onLeftPress={() => navigation.openDrawer()}
          style={Platform.OS === 'android' ? { marginTop: theme.SIZES.BASE } : null}
        />
        <KeyboardAvoidingView style={styles.container} behavior="height" enabled>
          <Block flex center style={{ marginTop: theme.SIZES.BASE * 1.875, marginBottom: height * 0.1 }}>
            <Text muted center size={theme.SIZES.FONT * 0.875} style={{ paddingHorizontal: theme.SIZES.BASE * 2.3 }}>
              Favor ingresar su credenciales para empezar a operar:
            </Text>
            <Block row center space="between" style={{ marginVertical: theme.SIZES.BASE * 1.875 }}>
              <Block flex middle right>
                <Button
                  round
                  onlyIcon
                  iconSize={theme.SIZES.BASE * 0}
                  icon=""
                  iconFamily="FontAwesome"
                  color={theme.COLORS.FACEBOOK}
                  shadowColor="display:none;"
                  iconColor={theme.COLORS.WHITE}
                  style="display:none;"
                  onPress={() => Alert.alert('Not implemented')}
                />
              </Block>
              <Block flex middle center style="display:none;">
                <Button 
                  round
                  onlyIcon
                  iconSize={theme.SIZES.BASE * 0}
                  icon=""
                  iconFamily="FontAwesome"
                  color={theme.COLORS.TWITTER}
                  shadowColor="display:none;"
                  iconColor={theme.COLORS.WHITE}
                  style="display:none;"
                  onPress={() => Alert.alert('Not implemented')}
                />
              </Block>
              <Block flex middle left>
                <Button
                  round
                  onlyIcon
                  iconSize={theme.SIZES.BASE * 0}
                  icon=""
                  iconFamily="FontAwesome"
                  color={theme.COLORS.DRIBBBLE}
                  shadowColor="display:none;"
                  iconColor={theme.COLORS.WHITE}
                  style="display:none;"
                  onPress={() => Alert.alert('Not implemented')}
                />
              </Block>
            </Block>
            <Text muted center size={theme.SIZES.FONT * 2.875}>
              SPM APP
            </Text>
          </Block>

                   

          <Block flex={2} center space="evenly">
            <Block flex={2}>
             
              

              <Dropdown
                rounded
                label='Ruta'
                style={{ width: width * 0.9 }}
                data={data1}
                onChangeText={text => this.handleChange('email', text)}
               />

              
              

              <Input
                rounded
                password
                viewPass
                placeholder="Contraseña"
                style={{ width: width * 0.9 }}
                onChangeText={text => this.handleChange('password', text)}
              />
              <Text
                color={theme.COLORS.ERROR}
                size={theme.SIZES.FONT * 0.75}
                onPress={() => Alert.alert('Not implemented')}
                style={{ alignSelf: 'flex-end', lineHeight: theme.SIZES.FONT * 2 }}
              >
                Olvido su Contraseña?
              </Text>
            </Block>
            <Block flex middle>
            
            
            <Button
                round
                color="error"
                
               onPress={() => Alert.alert( 'Sign in action',`Usuario: ${email} | Constraseña: ${password}`,)}
               // onPress=""
                              
              >
                Acceder
              </Button>
              <Button color="transparent" shadowless onPress={() => navigation.navigate('Register')}>
                <Text center color={theme.COLORS.ERROR} style="display:none;" size={theme.SIZES.FONT * 0.75}>
                  {""}
                </Text>
              </Button>
            </Block>
          </Block>
        </KeyboardAvoidingView>
      </Block>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around',
    paddingTop: theme.SIZES.BASE * 0.3,
    paddingHorizontal: theme.SIZES.BASE,
    backgroundColor: theme.COLORS.WHITE,
  },
  social: {
    width: theme.SIZES.BASE * 3.5,
    height: theme.SIZES.BASE * 3.5,
    borderRadius: theme.SIZES.BASE * 1.75,
    justifyContent: 'center',
  },
});

export default Login;
