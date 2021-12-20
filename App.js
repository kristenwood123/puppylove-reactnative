import React from 'react'
import { View, StyleSheet } from 'react-native'
import dogs  from './assets/data/dogs'

// Components
import Card from './src/components/Card'

const App = () => {

  return (
    <View style={styles.pageContainer}>
      <Card dog={dogs[0]} />
    </View>
  )
}

const styles = StyleSheet.create({
   pageContainer: { 
    justifyContent: 'center', 
    alignItems: 'center',
    flex: 1
  }
})

export default App