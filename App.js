import React, { useState, useEffect } from 'react'
import { View, StyleSheet } from 'react-native'
import 'react-native-gesture-handler'

 
 // Data 
 import dogs  from './assets/data/dogs'
import AnimatedStack from '././src/components/AnimatedStack.js'

const ROTATION = 60;
const SWIPE_VELOCITY = 800;

const App = () => {

  return (
    <View style={styles.pageContainer}>
      <AnimatedStack data={dogs}
      renderItem={(({ item }) => <Card user={item} /> )}
      />
    </View>
  )
}

const styles = StyleSheet.create({
   pageContainer: { 
    // width: '100%',
    justifyContent: 'center', 
    alignItems: 'center',
    flex: 1
  },
});

export default App