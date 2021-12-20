import React from 'react'
import { View, StyleSheet, Text, Pressable } from 'react-native'
import 'react-native-gesture-handler'
import Animated, { 
  useAnimatedStyle, 
  useSharedValue,
  withSpring
 } from 'react-native-reanimated'

// Data 
import dogs  from './assets/data/dogs'
// Components
import Card from './src/components/Card'

const App = () => {
  const sharedValue = useSharedValue(1)

  const cardStyle = useAnimatedStyle(() => ({
    transform: [
      {
      translateX: sharedValue.value * 200,
    },
  ],
  }));

  return (
    <View style={styles.pageContainer}>
      <Animated.View style={[styles.animatedCard, cardStyle]}>
        <Card dog={dogs[0]} />
      </Animated.View>
      <Pressable 
        onPress={() => (sharedValue.value = withSpring(Math.random()))}
        style={{position: 'absolute', top: 250}}>
        <Text>Change Value</Text>
      </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
   pageContainer: { 
    width: '100%',
    justifyContent: 'center', 
    alignItems: 'center',
    flex: 1
  },
  animatedCard: {
    width: '100%',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})

export default App