import React from 'react'
import { View, Text, StyleSheet, Image, Button, TouchableOpacity } from 'react-native'
import logo from '../../../assets/images/logo.png'

function Home({ navigation }) {

  const LoginButton = ({onPress, title}) => (
    <TouchableOpacity onPress={onPress} style={styles.loginButtonContainer}>
      <Text style={styles.loginButton}>{title}</Text>
  </TouchableOpacity>
  )

  return (
    <View style={styles.homeContainer}>
      <View style={styles.imageContainer}>
        <Image source={logo} style={styles.logo}/>
      </View>
        <Text style={styles.text}>Puppy Love</Text>
        <LoginButton
        title='Continue With Facebook'
        onPress={() => navigation.navigate('Explore')}/>
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
//   :root {
//   --color-main-purple: #cc63c7;
//   --color-button-purple: #520f80;
//   --color-gray-bg: #f9f9f9;
//   --color-dark-text: #333333;
//   --spacing: 0.1rem;
//   --transition: all 0.3s linear;
// }
  homeContainer: {
    flex: 1, 
    alignItems: 'center', 
    justifyContent: 'center',
    backgroundColor: '#cc63c7',
    width: '100%',
    height: '100%'
  }, 
  logo: {
    height: 80,
    bottom: 100,
    alignItems: 'center',
    resizeMode: 'contain'
  },
  text: {
    color: '#fff',
    fontSize: 30,
    bottom: 80
  },
  loginButtonContainer: {
    borderRadius: 25,
    paddingVertical: 10,
    paddingHorizontal: 50,
    backgroundColor: 'white'
  },
  loginButton: {
    color: '#000',
    backgroundColor: 'white',
    padding: 5
  }
})