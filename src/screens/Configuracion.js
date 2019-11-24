import React from 'react';
import PropTypes from 'prop-types';
import {
  Image, StyleSheet, ScrollView, Platform, TouchableOpacity
} from 'react-native';


import Constants from 'expo-constants';


// Galio components
import {
  Button, Block, Card, Text, Icon, NavBar,Input,
} from 'galio-framework';
import theme from '../theme';
import { Dropdown } from 'react-native-material-dropdown';



let data1 = [{
  value: 'RUTA 1',
}, {
  value: 'RUTA 2',
}, {
  value: 'RUTA 3',
}, {
  value: 'RUTA 4',
}];



const Author = props => (
  <Block row shadow middle space="between" style={styles.author}>
    <Block flex={0.25}>
      <Image source={{ uri: props.avatar }} style={styles.avatar} />
    </Block>
    <Block flex={0.7} style={styles.middle}>
      <Text style={{ fontWeight: '500' }}>{props.title}</Text>
      <Text p muted>{props.caption}</Text>
    </Block>
    <Block flex={0.5} row middle space="around">
      <Block row middle>
        <Icon name="eye" family="material-community" color={theme.COLORS.MUTED} size={theme.SIZES.FONT * 0.8} />
        <Text size={theme.SIZES.FONT * 0.7} p muted style={{ marginLeft: theme.SIZES.FONT * 0.25 }}>25.6k</Text>
      </Block>
      <Block row middle>
        <Icon name="heart-outline" family="material-community" color={theme.COLORS.MUTED} size={theme.SIZES.FONT * 0.8} />
        <Text size={theme.SIZES.FONT * 0.7} p muted style={{ marginLeft: theme.SIZES.FONT * 0.25 }}>936</Text>
      </Block>
    </Block>
  </Block>
);


Author.defaultProps = {
  author: null,
  title: null,
  caption: null,
  ruta: null,
};

Author.propsTypes = {
  author: PropTypes.string,
  title: PropTypes.string,
  caption: PropTypes.string,
};




const Configuracion = props => (
  <Block safe flex>
    <NavBar
      title="Configuración"
      titleStyle={{ alignSelf: 'flex-start' }}
      leftIconColor={theme.COLORS.MUTED}
      left={(
        <TouchableOpacity onPress={() => props.navigation.openDrawer()}>
          <Icon 
            name="menu"
            family="feather"
            size={theme.SIZES.BASE}
            color={theme.COLORS.ICON}
          />
        </TouchableOpacity>
      )}
      style={Platform.OS === 'android' ? { marginTop: theme.SIZES.BASE } : null}
      right={[
        <Button
          key="right-options"
          color="transparent"
          style={styles.button}
          onPress={() => props.navigation.openDrawer()}
        >
          <Icon size={theme.SIZES.BASE * 1.0625} name="fire" family="font-awesome" color={theme.COLORS.MUTED} />
        </Button>,
        <Button
          key="right-search"
          color="transparent"
          style={styles.button}
          onPress={() => props.navigation.openDrawer()}
        >
          <Icon size={theme.SIZES.BASE * 1.0625} name="leaf" family="font-awesome" color={theme.COLORS.MUTED} />
        </Button>,
      ]}
    />

    <ScrollView style={{ flex: 1 }}>
      <Block flex style={styles.news}>
        <Image
          source={{ uri: 'data:image/png;base64,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' }}
          style={styles.articleImage}
        />
        
        
        
        <Block style={styles.article}>

        

                <Dropdown
                  rounded
                  label='Ruta'
                  data={data1}
                  onChangeText={text => this.value('ruta', text)}
                />
                
                <Input
                  rounded
                  password
                  placeholder="Clave APP"
                  placeholderTextColor={theme.COLORS.THEME}
                  style={{ borderColor: theme.COLORS.THEME }}
                />
                <Input
                  rounded
                  placeholder="Correo de Salida"
                  placeholderTextColor={theme.COLORS.THEME}
                  style={{ borderColor: theme.COLORS.THEME }}
                />
                <Input
                  rounded
                  password
                  placeholder="Contraseña"
                  placeholderTextColor={theme.COLORS.THEME}
                  style={{ borderColor: theme.COLORS.THEME }}
                />

                <Input
                  rounded
                  placeholder="Correo Supervisor"
                  placeholderTextColor={theme.COLORS.THEME}
                  style={{ borderColor: theme.COLORS.THEME }}
                />
                <Text muted center size={theme.SIZES.FONT * 1.575} style={{ paddingHorizontal: theme.SIZES.BASE * 2.3 }}>
                 Credenciales de DB:
                </Text>
                <Input
                  rounded
                  placeholder="apiKey"
                  placeholderTextColor={theme.COLORS.THEME}
                  style={{ borderColor: theme.COLORS.THEME }}
                />
                <Input
                  rounded
                  placeholder="authDomain"
                  placeholderTextColor={theme.COLORS.THEME}
                  style={{ borderColor: theme.COLORS.THEME }}
                />
                <Input
                  rounded
                  placeholder="projectIdL"
                  placeholderTextColor={theme.COLORS.THEME}
                  style={{ borderColor: theme.COLORS.THEME }}
                />
                <Input
                  rounded
                  placeholder="storageBucket"
                  placeholderTextColor={theme.COLORS.THEME}
                  style={{ borderColor: theme.COLORS.THEME }}
                />
                <Input
                  rounded
                  placeholder="messagingSenderId"
                  placeholderTextColor={theme.COLORS.THEME}
                  style={{ borderColor: theme.COLORS.THEME }}
                />
                <Input
                  rounded
                  placeholder="appId"
                  placeholderTextColor={theme.COLORS.THEME}
                  style={{ borderColor: theme.COLORS.THEME }}
                />
                <Input
                  rounded
                  placeholder="smeasurementId"
                  placeholderTextColor={theme.COLORS.THEME}
                  style={{ borderColor: theme.COLORS.THEME }}
                />               
                
                <Button
                round
                color="error"
                onPress={() => Alert.alert(
                  'Sign in action',
                  `Email: ${ruta}
                  Password: ${password}`,
                  )}
                >
                Guardar Configuración
              </Button> 
        </Block>
      </Block>
    </ScrollView>

    
  </Block>
);

const styles = StyleSheet.create({
  article: {
    marginTop: theme.SIZES.BASE * 1.75,
  },
  articleImage: {
    borderRadius: theme.SIZES.BASE / 2,
    height: theme.SIZES.BASE * 13.75,
  },
  news: {
    marginTop: theme.SIZES.BASE / 2,
    paddingBottom: theme.SIZES.BASE / 2,
    justifyContent: 'flex-start',
    paddingHorizontal: theme.SIZES.BASE,
  },
  button: {
    width: theme.SIZES.BASE * 2,
    borderColor: 'transparent',
  },
  author: {
    position: 'absolute',
    right: theme.SIZES.BASE,
    left: theme.SIZES.BASE,
    bottom: Constants.statusBarHeight,
    backgroundColor: theme.COLORS.WHITE,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    elevation: theme.SIZES.BASE / 2,
  },
  text: {
    fontWeight: '400',
    fontSize: theme.SIZES.FONT * 0.875,
    lineHeight: theme.SIZES.BASE * 1.25,
    letterSpacing: 0.3,
    marginBottom: theme.SIZES.BASE,
  },
});

export default Configuracion;
