import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'
import { Button } from 'react-native-elements'
import logo from '../../../assets/images/logo.png'

function Home({ navigation }) {
  return (
    <View style={styles.homeContainer}>
      <View style={styles.imageContainer}>
        <Image source={logo} style={styles.logo}/>
      </View>
        <Text style={styles.text}>Puppy Love</Text>
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
    backgroundColor: 'rgb(153,65,143)',
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
  }
})