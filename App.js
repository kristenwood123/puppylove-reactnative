import React from 'react'
import { View, StyleSheet, Text, Pressable } from 'react-native'
import 'react-native-gesture-handler'
import Animated, { 
  useAnimatedStyle, 
  useSharedValue,
  withSpring,
  useAnimatedGestureHandler,
  useDerivedValue,
  interpolate
 } from 'react-native-reanimated'
 import { PanGestureHandler } from 'react-native-gesture-handler'

// Data 
import dogs  from './assets/data/dogs'
// Components
import Card from './src/components/Card'
import { useWindowDimensions } from 'react-native'

const App = () => {
  const { width: screenWidth } = useWindowDimensions()
  const translateX = useSharedValue(0)
  const rotate = useDerivedValue(() => interpolate(
    translateX.value, 
    [0, screenWidth],
    [0, 60]
  ) + 'deg'
  )

  const cardStyle = useAnimatedStyle(() => ({
    transform: [
      {
        translateX: translateX.value,
      },
      {
        rotate: rotate.value,
      }
  ],
  }));

  const gestureHandler = useAnimatedGestureHandler({
    onStart: (_, context) => {
      context.startX = translateX.value;
    },
    onActive: (event, context) => {
      translateX.value = context.startX + event.translationX;
    },
    onEnd: () => {
      console.warn('Touch ended');
    }
  })

  return (
    <View style={styles.pageContainer}>
      <PanGestureHandler onGestureEvent={gestureHandler}>
          <Animated.View style={[styles.animatedCard, cardStyle]}>
            <Card dog={dogs[0]} />
          </Animated.View>
        </PanGestureHandler>
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