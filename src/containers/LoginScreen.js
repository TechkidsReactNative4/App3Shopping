import React, { Component } from 'react';
import {
  Text,
  View,
  Image, StyleSheet
} from 'react-native';

import { backgroundColor } from '../styles'

class LoginScreen extends Component {
  state = {}

  renderLogo = () => (
    <Image
      style={styles.logo}
      resizeMode='contain'
      source={require('../../imgs/logo_app.jpg')} />
  )

  render() {
    return (
      <View style={styles.container}>
        {this.renderLogo()}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: backgroundColor,
    justifyContent: 'center'
  },
  logo: {
    width: 300,
    height: 300,
    alignSelf: 'center'
  }
})

export default LoginScreen;