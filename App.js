import React from 'react'
import { View, StyleSheet } from 'react-native'
import 'react-native-gesture-handler'
import { NavigationContainer } from '@react-navigation/native'

 
 // Data 
import dogs  from './assets/data/dogs'
import AnimatedStack from '././src/components/AnimatedStack.js'
import Card from './src/components/Card'
import Home from './src/components/Home'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

const Stack = createNativeStackNavigator()

//3:34
const App = () => {
  const onSwipeLeft = dog => {
    console.warn('swipe left', dog.name)
  }

  const onSwipeRight = dog => {
    console.warn('swipe right', dog.name)
  }

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {/* <View style={styles.pageContainer}> */}
          {/* <Stack.Screen name='Puppy Love' component={Home}/> */}
          <Stack.Screen name='Explore'>
            {props => <AnimatedStack 
              data={dogs}
              renderItem={({ item }) => <Card dog={item} /> }
              onSwipeLeft={onSwipeLeft}
              onSwipeRight={onSwipeRight}
              />}
          </Stack.Screen>
        {/* </View> */}
      </Stack.Navigator>
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({
   pageContainer: { 
    width: '100%',
    justifyContent: 'center', 
    alignItems: 'center',
    flex: 1
  },
});

export default App