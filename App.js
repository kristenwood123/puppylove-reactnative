import React, { useState, useEffect } from 'react'
import { View, StyleSheet, Text, Pressable } from 'react-native'
import 'react-native-gesture-handler'
import Animated, { 
  useAnimatedStyle, 
  useSharedValue,
  withSpring,
  useAnimatedGestureHandler,
  useDerivedValue,
  interpolate,
  runOnJS
 } from 'react-native-reanimated'
 import { PanGestureHandler } from 'react-native-gesture-handler'

// Data 
import dogs  from './assets/data/dogs'
// Components
import Card from './src/components/Card'
import { useWindowDimensions } from 'react-native'

const ROTATION = 60;
const SWIPE_VELOCITY = 800;t

const App = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [nextIndex, setNextIndex] = useState(currentIndex + 1)
  const currentProfile = dogs[currentIndex]
  const nextProfile = dogs[nextIndex]

  const { width: screenWidth } = useWindowDimensions()
  const hiddenTranslateX = 2 * screenWidth;

  const translateX = useSharedValue(0)
  const rotate = useDerivedValue(() => interpolate(translateX.value, [0, hiddenTranslateX], [0, ROTATION]) + 'deg')

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

  const nextCardStyle = useAnimatedStyle(() => ({
    transform: [
      {
        scale: interpolate(
          translateX.value, 
          [-hiddenTranslateX, 0, hiddenTranslateX], 
          [1, 0.8, 1])
      }
  ],
  opacity: interpolate(
          translateX.value, 
          [-hiddenTranslateX, 0, hiddenTranslateX], 
          [1, 0.6, 1]
      ),
  }));


  const gestureHandler = useAnimatedGestureHandler({
    onStart: (_, context) => {
      context.startX = translateX.value;
    },
    onActive: (event, context) => {
      translateX.value = context.startX + event.translationX;
    },
    onEnd: (event) => {
      if(Math.abs(event.velocityX) < SWIPE_VELOCITY) {
        translateX.value = withSpring(0);
        return
      } 
      translateX.value = withSpring(
        hiddenTranslateX * Math.sign(event.velocityX),
        {},
        () => runOnJS(setCurrentIndex)(currentIndex + 1)
      )
    }
  })

  useEffect(() => {
    translateX.value = 0;
    setNextIndex(currentIndex + 1)
  }, [currentIndex])

  return (
    <View style={styles.pageContainer}>
      {nextProfile && ( 
        <View style={styles.nextCardContainer}>
          <Animated.View style={[styles.animatedCard, nextCardStyle]}>
            <Card dog={nextProfile} />
          </Animated.View>
        </View>
      )}
      {currentProfile && (
      <PanGestureHandler onGestureEvent={gestureHandler}>
          <Animated.View style={[styles.animatedCard, cardStyle]}>
            <Card dog={currentProfile} />
          </Animated.View>
        </PanGestureHandler>
      )}
        {/* <Pressable 
          onPress={() => (sharedValue.value = withSpring(Math.random()))}
          style={{position: 'absolute', top: 250}}>
          <Text>Change Value</Text>
        </Pressable> */}
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
  },
  nextCardContainer: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute'
  }
})

export default App